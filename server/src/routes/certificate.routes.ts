import { Router } from 'express';
import * as CertificateController from '../controllers/certificate.controller';
import { upload } from '../utils/multer';
const router = Router();


router.get('/', CertificateController.getCertificates);
router.get('/:id', CertificateController.getDetailCertificate);
router.post('/', upload.single('pdf_file'), CertificateController.createCertificate);

export default router;