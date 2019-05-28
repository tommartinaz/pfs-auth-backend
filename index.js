const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./routes');

const port = process.env.PORT || 8000;
const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
app.use(bodyParser.urlencoded({ extended: false }));

router(app);
app.listen(port, () => console.log("listening on port: ", port));