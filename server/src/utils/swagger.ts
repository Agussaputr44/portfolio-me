import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Agus Saputra Portfolio API',
      version: '1.0.0',
      description: 'Dokumentasi API Portfolio menggunakan YAML terpisah.',
      contact: {
        name: 'Agus Saputra',
        url: 'https://github.com/agussaputr44',
      },
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development Server',
      },
    ],
  },
  apis: ['./src/docs/*.yaml'], 
};

export const swaggerSpec = swaggerJsdoc(options);