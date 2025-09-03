require('dotenv').config();
const express = require('express');
const climaRoutes = require('../app/routes/climaRoutes');
const path = require('path');

const app = express();
const port = 8080;

// configurando express-ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'src', 'views'));

app.use('/clima', climaRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});