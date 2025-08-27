require('dotenv').config();
const express = require('express');
const climaRoutes = require('./routes/climaRoutes');

const app = express();
const port = 3000;

app.use('/clima', climaRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});