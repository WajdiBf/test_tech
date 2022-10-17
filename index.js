const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

const expressOasGenerator = require('express-oas-generator');
const swagger = require('./src/documentation');

dotenv.config();

const routes = require('./src/routes');
const config = require('./src/config');
const morgan = require('morgan');
const app = express();

mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
	console.clear();
	console.log(`Connected to MongoDB ${config.mongoose.url}`);
	server = app.listen(config.port, () => {
		console.log(`Listening to port ${config.port}`);
	});
});

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));
// parse json request body
app.use(express.json());

app.use(morgan('tiny'));
app.use('/api', routes);
app.use(swagger.path, swagger.swaggerUi.serve, swagger.swaggerUi.setup(swagger.swaggerDocument));
app.use(express.static(path.join(__dirname, '/')));
expressOasGenerator.init(app, {});
