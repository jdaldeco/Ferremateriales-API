const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ventaSchema = new Schema({
    folio: {
        type: String,
        default: ""
    },
    productos: [{
        type: String,
        default: ""
    }],
    cilente: {
        type: String, 
        default: ""
    },
    importe: {
        type: Number,
        default: "0.0"
    },
    fecha: {
        type: Date,
        default: ""
    },
});

module.exports = mongoose.model('Venta', ventaSchema);