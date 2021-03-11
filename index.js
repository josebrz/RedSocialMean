const express = require('express');
const app = express();
const config = require('./config');
const routes = require('./network/routes');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

db(config.dbUrl);

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('port', config.port);
app.use(routes);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);   // eslint-disable-line no-console
});



