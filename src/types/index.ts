export interface ProductVariant {
  code: string;
  dimension: string;
  wattage: string;
}

export interface Product {
  id: string;
  code: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  categoryName: string;
  subCategory: string;
  shortDescription: string;
  description: string;
  image: string;
  gallery: string[];
  specifications: Record<string, string>;
  variants?: ProductVariant[];
  applications: string[];
  features: string[];
  isFeatured: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  productCount: number;
  subCategories: string[];
}

export interface Catalogue {
  id: string;
  title: string;
  filename: string;
  cover: string;
  file: string;
  pages: number;
  description: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  mfgSince: string;
  founder: string;
  certification: string;
  address: string;
  phoneNumbers: string[];
  primaryPhone: string;
  email: string;
  website: string;
  businessHours: string;
  catalogues: Catalogue[];
}

export interface EnquiryFormData {
  fullName: string;
  companyName?: string;
  phone: string;
  email: string;
  city?: string;
  requirementType: string;
  productRequirement?: string;
  message: string;
  honeypot?: string;
  file?: File | null;
}

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  timestamp: string;
}
