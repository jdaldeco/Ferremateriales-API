const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var clienteSchema = new Schema({
    nombre: {
        type: String,
        default: "",
    },
    sector: {
        type: String,
        default: "General",
    },
    domicilio: {
        type: String,
        default: "",
    },
    rfc: {
        type: String,
        default: "",
    },
    correo: {
        type: String,
        default: "",
    },
});

module.exports = mongoose.model('Cliente', clienteSchema);