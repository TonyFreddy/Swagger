const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const options = {
    definition: {
    openapi: '3.0.0',
    info: {
    title: 'My API',
    version: '1.0.0',
    description: 'A simple Express API',
    },
},
    apis: ['./routes/*.js'], // Chemin vers les fichiers d'API
};
const specs = swaggerJsdoc(options);

module.exports = {
swaggerUi,
specs,
};