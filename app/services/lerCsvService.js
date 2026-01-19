const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');

// csv resgatado em https://simplemaps.com/data/world-cities.
// const filePath = path.join(__dirname, '..', '..', 'worldcities.csv');
const filePath = path.join(__dirname, '..', '..', 'worldcities-copy.csv');

async function lerCsv(){
    return new Promise((resolve, reject) => {
        var all = [];
        var cidades = [];
        var pais = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (row) => {
                all.push(row);
                cidades.push(row.city);
                pais.push(row.country)
            })
            .on('error', (error) => {
                console.log('Erro ao ler o arquivo:', error);
                reject(error);
            })
            .on('end', () => {
                var dadosSeparados = {
                    cidades: cidades,
                    pais: pais
                }
                // console.log('CSV processado');
                resolve(dadosSeparados);
            });
    })
}

module.exports = { lerCsv }