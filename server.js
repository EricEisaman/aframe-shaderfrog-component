const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.static('.data'));
app.listen(process.env.PORT); 