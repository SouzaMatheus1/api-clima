require('dotenv').config();
const admin = require('firebase-admin');

// Importe o arquivo de credenciais que você baixou
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Exporte a instância do Firestore para usar em outros arquivos
const db = admin.firestore();

module.exports = db;