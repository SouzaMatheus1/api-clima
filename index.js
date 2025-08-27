require('dotenv').config();
const express = require('express');
const climaRoutes = require('./routes/climaRoutes');

const app = express();
const port = 3000;

// Middleware de log de requisições
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.originalUrl}`);
    next(); // Passa a requisição para o próximo middleware ou rota
});

app.use('/clima', climaRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});