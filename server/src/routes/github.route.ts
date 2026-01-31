import { Router } from 'express';
import { getGithubContributions } from '../controllers/github.controller';

const router = Router();

router.get('/contributions', getGithubContributions);

export default router;