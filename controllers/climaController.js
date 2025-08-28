const climaService = require('../services/climaService');
const { Requisition, validateRequisition } = require('../models/requisicaoModel');
const db = require('../database/firebaseConfig');

async function getClima(req, res) {
    const { cidade } = req.query;

    if (!cidade) {
        return res.status(400).json({ error: 'Cidade é obrigatória' });
    }

    try {
        const data = await climaService.fetchClima(cidade);

        const formattedData = {
            cidade: data.name,
            pais: data.sys.country,
            temperatura: data.main.temp + " °C",
            sensacao_termica: data.main.feels_like + " °C",
            condicao: data.weather[0].description,
            umidade: data.main.humidity + "%",
            velocidade_vento: data.wind.speed,
            icone: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        };

        const { error, value } = validateRequisition({
            Cidade: cidade,
            Temperatura: formattedData.temperatura,
            SensacaoTermica: formattedData.sensacao_termica,
            Data: new Date()
        });

        if(error){
            console.log("error: ", error.details)
            return;
        }
        
        const docRef = await db.collection('log').add(value);
        console.log("Log de requisição registrado com sucesso! ID:", docRef.id);

        res.json(formattedData);
    } catch (error) {
        if (error.response && error.response.status === 404)
            return res.status(400).json({ error: "Cidade não encontrada." });
        res.status(500).json({ error: "Erro ao buscar clima." });
    }
}

module.exports = { getClima };