const lerCsvService = require('../services/lerCsvService');

async function index(req, res){
    try {
        
        const dataCitiesRaw = await lerCsvService.lerCsv();
        const dataCitiesFormat = {
            cidades: dataCitiesRaw.cidades,
            pais: dataCitiesRaw.pais
        }
        console.log('CSV CONTROLLER:');
        console.log(dataCitiesFormat);

        res.render('index', { dataCities: dataCitiesFormat });
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao ler o CSV.", error: error.message });
    }
}

module.exports = { index };