const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');

const filePath = path.join(__dirname, '..', '..', 'worldcities.csv');

async function lerCsv(){
    var cidades = [];
    fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row) => {
            cidades.push(row);
        })
        .on('error', (error) => {
            console.log('Erro ao ler o arquivo:', error);
        })
        .on('end', () => {
            console.log('CSV processado');
            console.log(cidades);
        });
}

module.exports = { lerCsv }