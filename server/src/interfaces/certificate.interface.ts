export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  year: string;
  image_url?: string;
  pdf_url?: string;
  created_at: string;
}

export interface CreateCertificateInput {
  title: string;
  issuer: string;
  year: string;
  image_url?: string;
}