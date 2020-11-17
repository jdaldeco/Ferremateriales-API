const mongoose = require('mongoose');
var Producto = require('./Producto');
var Cliente = require('./Cliente');

var ventaSchema = new Schema({
    folio: String,
    cliente: Cliente,
    producto: Producto,
    importe: Number,
    fecha: Date
});

module.exports = mongoose.model('Venta', ventaSchema);