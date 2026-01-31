// src/index.ts
import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import projectRoutes from './routes/project.routes';
import githubRoutes from './routes/github.route';
import { swaggerSpec } from './utils/swagger';
import swaggerUi from 'swagger-ui-express';
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true })); 

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req: Request, res: Response) => {
  res.send('API Portfolio Agus Saputra is Running! 🚀');
});

app.use('/api/projects', projectRoutes);
app.use('/api/github', githubRoutes);


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});