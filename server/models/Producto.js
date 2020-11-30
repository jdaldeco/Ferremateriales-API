const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var productoSchema = new Schema({
    nombre: {
        type: String,
        default: "",
    },
    precio: {
        type: Number,
        default: 0.0,
    },
    descripcion: {
        type: String,
        default: "",
    }
});

module.exports = mongoose.model('Producto', productoSchema);