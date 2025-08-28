const Joi = require('joi');

const requisitionSchema = Joi.object({
    Cidade: Joi.string().required(),
    Temperatura: Joi.string().required(),
    SensacaoTermica: Joi.string().required(),
    Data: Joi.date().required(),
});

function validateRequisition(data){
    return requisitionSchema.validate(data);
}

class Requisition{
    constructor(data){
        this.Cidade = data.cidade;
        this.Temperatura = data.temperatura;
        this.SensacaoTermica = data.SensacaoTermica;
        this.Data = new Date();
    }
}

module.exports = { Requisition, validateRequisition };