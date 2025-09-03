const climaService = require('../services/climaService');
const logService = require('../services/logService');
const lerCsvService = require('../services/lerCsvService');

async function getClima(req, res) {
    const { cidade } = req.query;

    if (!cidade) {
        return res.status(400).json({ error: 'Cidade é obrigatória' });
    }

    try {
        const data = await climaService.fetchClima(cidade);

        const formattedData = formatData(data);

        await logService.dbLog(formattedData);

        const cidades = await lerCsvService.lerCsv();
        console.log(cidades);

        res.render('clima', { clima: formattedData });
    } catch (error) {
        if (error.response && error.response.status === 404)
            return res.status(400).json({ error: "Cidade não encontrada." });
        res.status(500).json({ error: "Erro ao buscar clima.", error: error.message });
    }
}

function formatData(data){
    return {
        cidade: data.name,
        pais: data.sys.country,
        temperatura: data.main.temp + " °C",
        sensacao_termica: data.main.feels_like + " °C",
        condicao: data.weather[0].description,
        umidade: data.main.humidity + "%",
        velocidade_vento: data.wind.speed,
        icone: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    }
}

module.exports = { getClima };