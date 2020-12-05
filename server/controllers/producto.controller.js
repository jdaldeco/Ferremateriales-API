var Producto = require('../models/Producto');

var productoController = {
    
    // Crear PRODUCTO
    createProducto: function(req, res) {
        var producto = new Producto();
        var params = req.body;

        producto.nombre = params.nombre;
        producto.precio = params.precio;
        producto.descripcion = params.descripcion;

        producto.save((err, productoStored) => {
            if (err) return res.status(500).send({message: "Error al guardar"});

            if (!productoStored) return res.status(404).send({message: "No se ha podido guardar el curso"});

            return res.status(200).send({
                producto: productoStored
            })
        });
    },

    // Obtener PRODUCTO
    getProducto: function(req, res) {
        var productoId = req.params.id;

        Producto.findById(productoId, (err, producto) => {
            if (err) return res.status(500).send({message: "Error al obtener"});

            if (!producto) return res.status(404).send({message: "Producto no existente"});

            return res.status(200).send({
                producto
            })
        });
    },

    // Obtener todos los PRODUCTOS
    getAllProductos: function(req, res) {
        Producto.find({}).exec((err, productos) => {
            if (err) return res.status(500).send({message: "Error al obtener"});
            
            if (!productos) return res.status(404).send({message: "No hay productos que mostrar"});

            return res.status(200).send({ productos });
        });
    },

    updateProducto: function(req, res) {
        var productoId = req.params.id;
        var update = req.body;

        Producto.findByIdAndUpdate(productoId, update, {new:true}, (err, productoUpdated) => {
            if (err) return res.status(500).send({message: "No se ha podido actualizar"});

            if (!productoUpdated) return res.status(404).send({message: "Producto no existente"});

            return res.status(200).send({
                producto: productoUpdated
            })
        });
    },

    // Eliminar un PRODUCTO
    deleteProducto: function(req, res) {
        var productoId = req.params.id;

        Producto.findByIdAndRemove(productoId, (err, productoRemoved) => {
            if (err) return res.status(500).send({message: "Error al obtener"});

            if (!productoRemoved) return res.status(404).send({message: "Producto no existente"});

            return res.status(200).send({
                producto: productoRemoved
            });
        })
    },

    // Buscar por nombre de PRODUCTO
    findProductoByName: function(req, res) {
        var code = req.params.code;

        Producto.find({nombre: code}).exec((err, productos) => {
            if (err) return res.status(500).send({message: "Error al obtener"});

            if (!productos) return res.status(404).send({messgae: "No hay productos que mostrar"});

            return res.status(200).send({ productos });
        });
    }
}

module.exports = productoController;