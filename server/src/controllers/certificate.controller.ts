import { Request, Response } from 'express';
import * as CertificateService from '../services/certificate.service';
import { uploadToSupabase } from '../services/storage.service';

export const getCertificates = async (req: Request, res: Response) => {
  try {
    const data = await CertificateService.getAllCertificates();
    res.status(200).json({
      status: true,
      data
    });
  } catch (error: any) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

export const getDetailCertificate = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await CertificateService.getCertificateById(Number(id));
    
    if (!data) {
      return res.status(404).json({ status: 'error', message: 'Sertifikat tidak ditemukan' });
    }

    res.status(200).json({
      status: true,
      data
    });
  } catch (error: any) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

export const createCertificate = async (req: Request, res: Response) => {
  try {
    let pdfUrl = '';
    if (req.file) {
      pdfUrl = await uploadToSupabase(req.file, 'pdfs');
    }

    const payload = {
      title: req.body.title,
      issuer: req.body.issuer,
      year: req.body.year,
      pdf_url: pdfUrl
    };

    const data = await CertificateService.addCertificate(payload);
    res.status(201).json({ status: true, data });
  } catch (error: any) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};