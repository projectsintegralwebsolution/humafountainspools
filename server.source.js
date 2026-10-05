import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// Default to port 3000 (standard for MilesWeb Node.js Proxy) or process.env.PORT
const PORT = process.env.PORT || 3000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer storage for optional architectural drawings/files
const uploadDir = path.join(__dirname, 'uploads');
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
const recentSubmissions = new Map();

// Setup Nodemailer transporter
const createTransporter = () => {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const user = process.env.SMTP_USER || 'integralwebsolution@gmail.com';
  const pass = process.env.SMTP_PASSWORD;

  // Verify valid password configured (prevent trying with ******* placeholder)
  if (host && user && pass && !pass.includes('*') && pass.trim().length > 0) {
    return nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass: pass.trim() },
    });
  }
  return null;
};

// Health Check Endpoint
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    service: 'HUMA Fountains & Pools API',
  });
});

// Enquiry Submission Endpoint (3-Way Notification)
app.post('/api/enquiry', upload.single('file'), async (req, res) => {
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

    // 4. Automated Notification Email System:
    // Sender: integralwebsolution@gmail.com
    // Recipient 1: HUMA Company Admin (fountainpoolled@gmail.com)
    // Recipient 2: Agency Audit Copy (integralwebsolution@gmail.com)
    // Recipient 3: Personal Copy (princekumarjha80@gmail.com - strictly private, not visible on website)
    // Recipient 4: Visitor / Customer Confirmation (email provided in form)
    const transporter = createTransporter();
    const adminEmail = process.env.ADMIN_EMAIL || 'fountainpoolled@gmail.com';
    const agencyEmail = process.env.AGENCY_EMAIL || 'integralwebsolution@gmail.com';
    const personalEmail = process.env.PERSONAL_EMAIL || 'princekumarjha80@gmail.com';
    const smtpUser = process.env.SMTP_USER || 'integralwebsolution@gmail.com';
    const fromAddress = `"HUMA Fountains & Pools" <${smtpUser}>`;

    const emailAttachments = uploadedFile
      ? [
          {
            filename: uploadedFile.originalname,
            path: uploadedFile.path,
          },
        ]
      : [];

    // [1/4] HUMA Admin Lead Notification
    const adminMailOptions = {
      from: fromAddress,
      to: adminEmail,
      replyTo: email,
      subject: `New Project Lighting Enquiry: ${requirementType || 'Pool Lighting'} - ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #062B4C; padding: 22px; color: #ffffff;">
            <h2 style="margin: 0; font-size: 20px; letter-spacing: 0.5px;">New Project Lighting Enquiry</h2>
            <p style="margin: 5px 0 0; font-size: 13px; color: #08B8C2;">HUMA Fountains & Pools • Manufacturing Plant, Vasai-Virar</p>
          </div>
          <div style="padding: 24px; color: #1e293b; line-height: 1.6;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr><td style="padding: 8px 0; color: #64748b; width: 150px;"><strong>Client Name:</strong></td><td><strong style="color: #062B4C;">${fullName}</strong></td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;"><strong>Company / Firm:</strong></td><td>${companyName || 'Not specified'}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;"><strong>Phone:</strong></td><td><a href="tel:${phone}" style="color: #0284c7; text-decoration: none; font-weight: bold;">${phone}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;"><strong>Email:</strong></td><td><a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;"><strong>City / Site Location:</strong></td><td>${city || 'Not specified'}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;"><strong>Requirement Category:</strong></td><td><span style="background: #e0f2fe; color: #0369a1; padding: 3px 10px; border-radius: 4px; font-weight: 600;">${requirementType}</span></td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;"><strong>Product Code / Scope:</strong></td><td><span style="background: #f1f5f9; color: #334155; padding: 3px 10px; border-radius: 4px; font-weight: 600;">${productRequirement || 'General Inquiry'}</span></td></tr>
            </table>
            <div style="margin-top: 18px; padding: 14px; background: #f8fafc; border-radius: 6px; border-left: 4px solid #08B8C2;">
              <strong style="color: #062B4C;">Client Project Details:</strong><br/>
              <p style="margin: 6px 0 0; white-space: pre-wrap; color: #334155;">${message}</p>
            </div>
            ${uploadedFile ? `<div style="margin-top: 14px; padding: 10px 14px; background: #ecfdf5; border-radius: 6px; color: #065f46; font-size: 13px;">📎 <strong>Attached Drawing / Doc:</strong> ${uploadedFile.originalname} (${Math.round(uploadedFile.size / 1024)} KB)</div>` : ''}
          </div>
          <div style="background: #f1f5f9; padding: 12px 24px; font-size: 11px; color: #64748b; text-align: center;">
            Lead captured via humafountainspools.com • Direct reply will send to ${email}
          </div>
        </div>
      `,
      attachments: emailAttachments,
    };

    // [2/4] Agency Audit Notification Copy (Integral Web Solution)
    const agencyMailOptions = {
      from: fromAddress,
      to: agencyEmail,
      replyTo: email,
      subject: `[Lead Notification Copy] ${requirementType || 'Lighting'} - ${fullName} | HUMA Website`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #1e293b; padding: 18px 22px; color: #ffffff;">
            <h3 style="margin: 0; font-size: 16px; color: #38bdf8;">HUMA Fountains & Pools — Agency Audit Copy</h3>
            <p style="margin: 3px 0 0; font-size: 12px; color: #94a3b8;">Automated Lead Notification System</p>
          </div>
          <div style="padding: 20px; font-size: 13px; color: #334155; line-height: 1.5;">
            <p style="margin-top: 0;">A new project lead was submitted through the HUMA website and routed to <strong>${adminEmail}</strong>:</p>
            <ul style="padding-left: 20px; margin: 10px 0;">
              <li><strong>Lead Name:</strong> ${fullName}</li>
              <li><strong>Contact:</strong> ${phone} | ${email}</li>
              <li><strong>Company:</strong> ${companyName || 'N/A'} (Location: ${city || 'N/A'})</li>
              <li><strong>Requirement:</strong> ${requirementType} — ${productRequirement || 'N/A'}</li>
              <li><strong>Attachment:</strong> ${uploadedFile ? uploadedFile.originalname : 'None'}</li>
            </ul>
            <div style="margin-top: 14px; padding: 10px; background: #f8fafc; border-radius: 4px; font-size: 12px; color: #64748b;">
              <strong>Note:</strong> Client confirmation was simultaneously sent to <em>${email}</em>.
            </div>
          </div>
        </div>
      `,
      attachments: emailAttachments,
    };

    // [3/4] Personal Direct Notification Copy (Prince Kumar Jha)
    const personalMailOptions = {
      from: fromAddress,
      to: personalEmail,
      replyTo: email,
      subject: `[Lead Alert] ${requirementType || 'Lighting'} - ${fullName} | HUMA Fountains & Pools`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #0284c7; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0369a1; padding: 18px 22px; color: #ffffff;">
            <h3 style="margin: 0; font-size: 16px; color: #ffffff;">New Website Lead Notification</h3>
            <p style="margin: 3px 0 0; font-size: 12px; color: #e0f2fe;">HUMA Fountains & Pools • Personal Copy</p>
          </div>
          <div style="padding: 22px; font-size: 13px; color: #334155; line-height: 1.6;">
            <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
              <tr><td style="padding: 6px 0; color: #64748b; width: 130px;"><strong>Client Name:</strong></td><td><strong>${fullName}</strong></td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;"><strong>Company:</strong></td><td>${companyName || 'Not specified'}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;"><strong>Phone:</strong></td><td><a href="tel:${phone}" style="color: #0284c7; font-weight: bold;">${phone}</a></td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;"><strong>Email:</strong></td><td><a href="mailto:${email}" style="color: #0284c7;">${email}</a></td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;"><strong>City:</strong></td><td>${city || 'Not specified'}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;"><strong>Requirement:</strong></td><td>${requirementType} — ${productRequirement || 'General Selection'}</td></tr>
            </table>
            <div style="margin-top: 14px; padding: 12px; background: #f8fafc; border-radius: 6px; border-left: 3px solid #0284c7;">
              <strong>Message:</strong><br/>
              <p style="margin: 4px 0 0; color: #1e293b;">${message}</p>
            </div>
            ${uploadedFile ? `<div style="margin-top: 10px; font-size: 12px; color: #0284c7;">📎 Attachment: ${uploadedFile.originalname}</div>` : ''}
          </div>
        </div>
      `,
      attachments: emailAttachments,
    };

    // [4/4] Visitor Confirmation Email (Auto-acknowledgement to form submitter)
    const customerMailOptions = {
      from: fromAddress,
      to: email,
      replyTo: adminEmail,
      subject: `Enquiry Received — HUMA Fountains & Pools`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #062B4C; padding: 24px; text-align: center; color: #ffffff;">
            <h1 style="margin: 0; font-size: 22px; letter-spacing: 1px;">HUMA FOUNTAINS & POOLS</h1>
            <p style="margin: 4px 0 0; font-size: 13px; color: #08B8C2;">Innovative Lighting Solutions • MFG Since 2010</p>
          </div>
          <div style="padding: 24px; color: #334155; line-height: 1.6; font-size: 14px;">
            <p>Dear <strong>${fullName}</strong>,</p>
            <p>Thank you for contacting <strong>HUMA Fountains & Pools</strong> regarding your aquatic lighting requirements (<strong>${productRequirement || requirementType}</strong>).</p>
            <p>Our engineering and technical sales desk has received your project details. One of our lighting specialists will review your requirements and get back to you with photometric guidance, catalogue cut-sheets, and factory quotation shortly.</p>
            
            <div style="margin: 20px 0; padding: 18px; background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
              <h4 style="margin: 0 0 10px; color: #062B4C; font-size: 14px;">Direct Factory & Sales Support:</h4>
              <p style="margin: 4px 0; font-size: 13px;">📞 <strong>Phone:</strong> <a href="tel:+918668466689" style="color: #062B4C; text-decoration: none;">+91 8668466689</a> / <a href="tel:+919766775542" style="color: #062B4C; text-decoration: none;">+91 9766775542</a></p>
              <p style="margin: 4px 0; font-size: 13px;">✉️ <strong>Email:</strong> <a href="mailto:fountainpoolled@gmail.com" style="color: #062B4C; text-decoration: none;">fountainpoolled@gmail.com</a></p>
              <p style="margin: 4px 0; font-size: 13px;">📍 <strong>Plant:</strong> Vasai East, Vasai-Virar, Maharashtra 401208</p>
            </div>

            <p style="font-size: 13px; color: #64748b; margin-bottom: 0;">
              Best regards,<br/>
              <strong>Technical Lighting Sales Desk</strong><br/>
              HUMA Fountains & Pools
            </p>
          </div>
          <div style="background: #f1f5f9; padding: 12px; font-size: 11px; color: #94a3b8; text-align: center;">
            This is an automated acknowledgment confirming receipt of your inquiry.
          </div>
        </div>
      `,
    };

    if (transporter) {
      // Dispatch all notifications in parallel
      await Promise.all([
        transporter.sendMail(adminMailOptions),
        transporter.sendMail(agencyMailOptions),
        transporter.sendMail(personalMailOptions),
        transporter.sendMail(customerMailOptions),
      ]);
      console.log('✅ Lead Notifications Dispatched Successfully:');
      console.log(`   [1/4] HUMA Admin:    ${adminEmail}`);
      console.log(`   [2/4] Agency Copy:   ${agencyEmail}`);
      console.log(`   [3/4] Personal Copy: ${personalEmail}`);
      console.log(`   [4/4] Customer Conf: ${email}`);
    } else {
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('📬 LEAD NOTIFICATION ACTIVE (Simulation Mode - App Password is *******)');
      console.log(`   • SMTP Sender:          ${smtpUser}`);
      console.log(`   • [1/4] HUMA Client:    ${adminEmail} (Primary lead notification)`);
      console.log(`   • [2/4] Agency Copy:    ${agencyEmail} (Audit copy notification)`);
      console.log(`   • [3/4] Personal Copy:  ${personalEmail} (Personal lead copy)`);
      console.log(`   • [4/4] Customer:       ${email} (Auto-confirmation notification)`);
      console.log('   --- Lead Details ---');
      console.log(`   Client Name:  ${fullName}`);
      console.log(`   Company:      ${companyName || 'Not specified'}`);
      console.log(`   Phone:        ${phone}`);
      console.log(`   Email:        ${email}`);
      console.log(`   City:         ${city || 'Not specified'}`);
      console.log(`   Requirement:  ${requirementType} | Product: ${productRequirement || 'General Selection'}`);
      console.log(`   Message:      ${message}`);
      if (uploadedFile) console.log(`   Attachment:   ${uploadedFile.originalname} (${Math.round(uploadedFile.size / 1024)} KB)`);
      console.log('   ℹ️ Note: Update your Gmail App Password in .env to begin live SMTP delivery.');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    }

    return res.status(200).json({
      success: true,
      message: 'Thank you for contacting HUMA Fountains & Pools. Our team will get back to you shortly.',
    });
  } catch (error) {
    console.error('Error processing enquiry:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while processing your enquiry. Please contact us directly at +91 8668466689.',
    });
  }
});

// Serve static frontend build if dist folder exists
const distPath = path.resolve(__dirname, 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.use((_req, res) => {
    res.sendFile('index.html', { root: distPath });
  });
} else {
  app.get('/', (_req, res) => {
    res.send('HUMA Fountains & Pools Backend API is running. Build frontend by running npm run build.');
  });
}

app.listen(Number(PORT), '0.0.0.0', () => {
  console.log(`HUMA Backend Server running on http://0.0.0.0:${PORT}`);
});
