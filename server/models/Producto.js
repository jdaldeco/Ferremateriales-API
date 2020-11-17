const mongoose = require('mongoose');

var productoSchema = new Schema({
    nombre: String,
    precio: Number,
    descripcion: String
});

module.exports = mongoose.model('Producto', productoSchema);