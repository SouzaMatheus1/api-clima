require('dotenv').config();
const express = require('express');
const climaRoutes = require('./routes/climaRoutes');
const path = require('path');

const app = express();
const port = 8080;

// configurando express ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/clima', climaRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});