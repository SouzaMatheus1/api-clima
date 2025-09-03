const axios = require('axios');
const db = require('../database/firebaseConfig');
const { Requisition, validateRequisition } = require('../models/requisicaoModel');


async function dbLog(data) {
    try{
        // cria um objeto requisicao (requisicaoModel.js)
        const { error, value } = validateRequisition({
            Cidade: data.cidade + ' - ' + data.pais,
            Temperatura: data.temperatura,
            SensacaoTermica: data.sensacao_termica,
            Data: new Date()
        });
    
        if (error) {
            console.log("error: ", error.details)
            return;
        }
    
        const docRef = await db.collection('log').add(value);
        console.log("Log de requisição registrado com sucesso! ID:", docRef.id);
    }catch(e){
        console.error('error: ', e);
        return;
    }
}

module.exports = { dbLog }