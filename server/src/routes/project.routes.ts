import { Router } from 'express';
import { getProjects, getDetailProject, createProject } from '../controllers/project.controller';
import { upload } from '../utils/multer'; // <--- Pastikan import ini ada

const router = Router();

router.get('/', getProjects);
router.get('/:id', getDetailProject);

router.post('/', upload.single('image'), createProject); 

export default router;