import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer storage for optional architectural drawings/files
const uploadDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadDir);
  },
  filename: (_req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname.replace(/[^a-zA-Z0-9.-]/g, '_'));
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (_req, file, cb) => {
    const allowed = ['.pdf', '.dwg', '.doc', '.docx', '.jpg', '.jpeg', '.png'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowed.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('File format not supported. Only PDF, CAD/DWG, Word, and images are permitted.'));
    }
  },
});

// Cache to prevent duplicate submissions within 30 seconds
const recentSubmissions = new Map<string, number>();

// Setup Nodemailer transporter
const createTransporter = () => {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (host && user && pass) {
    return nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });
  }
  return null;
};

// Health Check
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    service: 'HUMA Fountains & Pools API',
  });
});

// Enquiry Submission Endpoint
app.post('/api/enquiry', upload.single('file'), async (req: Request, res: Response) => {
  try {
    const {
      fullName,
      companyName,
      phone,
      email,
      city,
      requirementType,
      productRequirement,
      message,
      website_hp,
    } = req.body;

    // 1. Anti-spam honeypot detection
    if (website_hp) {
      console.warn('Spam submission trapped by honeypot field');
      return res.status(200).json({
        success: true,
        message: 'Thank you for contacting HUMA Fountains & Pools. Our team will get back to you shortly.',
      });
    }

    // 2. Server-side validation
    if (!fullName || !phone || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed: Full Name, Phone, Email, and Message are required.',
      });
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email address format.',
      });
    }

    // 3. Duplicate submission prevention
    const dedupeKey = `${phone.trim()}_${email.trim()}_${(productRequirement || '').trim()}`;
    const lastTime = recentSubmissions.get(dedupeKey);
    const now = Date.now();
    if (lastTime && now - lastTime < 30000) {
      return res.status(200).json({
        success: true,
        message: 'Thank you for contacting HUMA Fountains & Pools. Our team will get back to you shortly.',
      });
    }
    recentSubmissions.set(dedupeKey, now);

    const uploadedFile = req.file;

    // 4. Send internal notification email & customer auto-confirmation
    const transporter = createTransporter();
    const adminEmail = process.env.ADMIN_EMAIL || 'fountainpoolled@gmail.com';

    if (transporter) {
      // Internal Admin Email
      const adminMailOptions = {
        from: `"HUMA Website Enquiry" <${process.env.SMTP_USER}>`,
        to: adminEmail,
        replyTo: email,
        subject: `New B2B Enquiry: ${requirementType || 'Pool Lighting'} - ${fullName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #062B4C; padding: 20px; color: #ffffff;">
              <h2 style="margin: 0; font-size: 20px;">New Project Lighting Enquiry</h2>
              <p style="margin: 5px 0 0; font-size: 13px; color: #08B8C2;">HUMA Fountains & Pools • Vasai-Virar</p>
            </div>
            <div style="padding: 24px; color: #1e293b; line-height: 1.6;">
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr><td style="padding: 8px 0; color: #64748b; width: 140px;"><strong>Client Name:</strong></td><td>${fullName}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;"><strong>Company:</strong></td><td>${companyName || 'Not specified'}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;"><strong>Phone:</strong></td><td><a href="tel:${phone}">${phone}</a></td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;"><strong>Email:</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;"><strong>City / Location:</strong></td><td>${city || 'Not specified'}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;"><strong>Requirement:</strong></td><td><span style="background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 4px;">${requirementType}</span></td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;"><strong>Product Code:</strong></td><td>${productRequirement || 'General Selection'}</td></tr>
              </table>
              <div style="margin-top: 16px; padding: 14px; background: #f8fafc; border-radius: 6px; border-left: 4px solid #08B8C2;">
                <strong>Message:</strong><br/>
                <p style="margin: 6px 0 0; white-space: pre-wrap;">${message}</p>
              </div>
              ${uploadedFile ? `<p style="margin-top: 14px; font-size: 13px; color: #0f766e;"><strong>Attachment:</strong> ${uploadedFile.originalname} (${Math.round(uploadedFile.size / 1024)} KB)</p>` : ''}
            </div>
            <div style="background: #f1f5f9; padding: 12px 24px; font-size: 11px; color: #64748b; text-align: center;">
              Enquiry submitted via humafountainspools.com
            </div>
          </div>
        `,
        attachments: uploadedFile
          ? [
              {
                filename: uploadedFile.originalname,
                path: uploadedFile.path,
              },
            ]
          : [],
      };

      // Customer Auto-confirmation Email
      const customerMailOptions = {
        from: `"HUMA Fountains & Pools" <${process.env.SMTP_USER}>`,
        to: email,
        subject: `Enquiry Received — HUMA Fountains & Pools`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #062B4C; padding: 24px; text-align: center; color: #ffffff;">
              <h1 style="margin: 0; font-size: 22px;">HUMA FOUNTAINS & POOLS</h1>
              <p style="margin: 4px 0 0; font-size: 13px; color: #08B8C2;">Innovative Lighting Solution • MFG Since 2010</p>
            </div>
            <div style="padding: 24px; color: #334155; line-height: 1.6; font-size: 14px;">
              <p>Dear <strong>${fullName}</strong>,</p>
              <p>Thank you for contacting <strong>HUMA Fountains & Pools</strong> regarding your aquatic lighting requirements (<strong>${productRequirement || requirementType}</strong>).</p>
              <p>Our engineering and technical sales desk has received your details. One of our lighting specialists will review your requirements and get back to you with photometric guidance, catalogue cut-sheets, and factory quotation shortly.</p>
              <div style="margin: 20px 0; padding: 16px; background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
                <h4 style="margin: 0 0 8px; color: #062B4C;">Direct Factory Contacts:</h4>
                <p style="margin: 4px 0; font-size: 13px;">📞 Phone: +91 8668466689 / +91 9766775542</p>
                <p style="margin: 4px 0; font-size: 13px;">✉️ Email: fountainpoolled@gmail.com</p>
                <p style="margin: 4px 0; font-size: 13px;">📍 Plant: Vasai East, Vasai-Virar, Maharashtra 401208</p>
              </div>
              <p style="font-size: 13px; color: #64748b;">Best regards,<br/><strong>Team HUMA Fountains & Pools</strong></p>
            </div>
          </div>
        `,
      };

      await Promise.all([
        transporter.sendMail(adminMailOptions),
        transporter.sendMail(customerMailOptions),
      ]);
    } else {
      console.log('--- ENQUIRY RECEIVED (SMTP Pending Configuration) ---');
      console.log('Name:', fullName);
      console.log('Phone:', phone);
      console.log('Email:', email);
      console.log('Requirement:', requirementType, '| Product:', productRequirement);
      console.log('Message:', message);
      if (uploadedFile) console.log('Attached file:', uploadedFile.originalname);
      console.log('----------------------------------------------------');
    }

    // Prompt Section 34 explicitly states:
    // "Success: Thank you for contacting HUMA Fountains & Pools. Our team will get back to you shortly."
    return res.status(200).json({
      success: true,
      message: 'Thank you for contacting HUMA Fountains & Pools. Our team will get back to you shortly.',
    });
  } catch (error: any) {
    console.error('Error processing enquiry:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while processing your enquiry. Please contact us directly at +91 8668466689.',
    });
  }
});

// Serve static frontend build if dist folder exists
const distPath = path.resolve(process.cwd(), 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.use((_req: Request, res: Response) => {
    res.sendFile('index.html', { root: distPath });
  });
}

app.listen(PORT, () => {
  console.log(`HUMA Backend Server running on port ${PORT}`);
});
