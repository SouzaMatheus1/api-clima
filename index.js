require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

const API_KEY = process.env.API_KEY;
const API_URL = process.env.BASE_URL;

app.get('/clima', async(req, res) => {
    const cidade = req.query.cidade;

    if(!cidade){
        return res.status(400).json({error: 'Cidade é obrigatória'});
    }

    try{
        const response = await axios.get(`${API_URL}?q=${cidade}&APPID=${API_KEY}&units=metric&lang=pt_br`);
        const data = response.data;

        const formattedData ={
            cidade: data.name,
            pais: data.sys.country,
            temperatura: data.main.temp + "°C",
            sensacao_termica: data.main.feels_like + "°C",
            condicao: data.weather[0].description,
            umidade: data.main.humidity + "%",
            velocidade_vento: data.wind.speed,
            icone: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        }

        res.json(formattedData);
    }catch(error){
        if(error.response && error.response.status === 404)
            return res.status(400).json({error: "cidade não encontrada."});
        res.status(500).json({error: "Erro ao buscar clima."});
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});