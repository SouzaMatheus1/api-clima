const Joi = require('joi');

const requisitionSchema = Joi.object({
    Cidade: Joi.string().required(),
    Data: Joi.date().required(),
});

function validateRequisition(data){
    return requisitionSchema.validate(data);
}

class Requisition{
    constructor(cidade){
        this.Cidade = cidade;
        this.Data = new Date();
    }
}

module.exports = { Requisition, validateRequisition };