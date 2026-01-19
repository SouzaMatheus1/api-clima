const lerCsvService = require('../services/lerCsvService');

async function lerCsv(req, res) {
    try {
        const dataCities = await lerCsvService.lerCsv();
        console.log('CSV CONTROLLER:');
        console.log(dataCities);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao ler o CSV.", error: error.message });
    }
}

module.exports = { lerCsv };