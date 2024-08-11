const express = require("express");

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const port = 3000;

const swagOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: ' First Node Learning API',
            version: '1.0.0',
            description: 'Simple test API',
        }
    },
    apis: ['./app.js']
}

const swagDocs = swaggerJsdoc(swagOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagDocs));

// Sample data
const data = [
    { id: 1, name: 'Item 1', description: 'This is item 1' },
    { id: 2, name: 'Item 2', description: 'This is item 2' },
    { id: 3, name: 'Item 3', description: 'This is item 3' },
];

const myName = "My name is Hafsa";

/**
 * @swagger
* /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Return name.
  */
 
app.get('/', (req, res) => {
    res.json(data);
  });

  //app.use(express.json());

  /**
 * @swagger
* /:
 *   post:
 *     summary: Submit form data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: integer
 *     responses:
 *       200:
 *         description: POST Request RECEIVED
 */
  // Define a POST route
  app.post('/', (req, res) => {
    const formData = req.body;
    console.log('Form Data:', formData);
    //res.json(formData);
    res.send('POST Request Received');
  });

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    console.log(`Swagger UI available at http://localhost:${port}/api-docs`);
});