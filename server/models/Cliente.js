const mongoose = require('mongoose');

var clienteSchema = new Schema({
    nombre: String,
    sector: String,
    domicilio: String,
    rfc: String,
    correo: String
});

module.exports = mongoose.model('Cliente', clienteSchema);