const mongoose = require('mongoose');
var Producto = require('./Producto');
var Cliente = require('./Cliente');
const Schema = mongoose.Schema;

var ventaSchema = new Schema({
    folio: {
        type: String,
        default: "",
    },
    clientes: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:'Cliente'
    },
    productos: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:'Producto'
    },
    importe: {
        type: Number,
        default: "0.0",
    },
    fecha: {
        type: Date,
        default: "",
    },
});

module.exports = mongoose.model('Venta', ventaSchema);