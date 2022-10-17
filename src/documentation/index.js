var expressOasGenerator = require('express-oas-generator');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

module.exports = {
	swaggerDocument,
	swaggerUi,
	expressOasGenerator,
	path: '/'
};
