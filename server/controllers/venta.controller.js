var Venta = require('../models/Venta');

var ventaController = {

    // Create VENTA
    createVenta: function(req, res) {
        var venta = new venta();
        var params = req.body;

        venta.folio = params.folio;
        venta.cliente = params.cliente;
        venta.producto = params.producto;
        venta.importe = params.importe;
        venta.fecha = params.fecha;

        venta.save((err, ventaStored) => {
            if (err) return res.status(500).send({message: "Error al guardar"});

            if (!ventaStored) return res.status(404).send({message: "No se ha podido guardar la venta"});

            return res.status(200).send({
                venta: ventaStored
            })
        });
    },

    // Obtener VENTA
    getVentaByFolio: function(req, res) {
        var ventaFolio = req.params.folio;

        Venta.find({folio: ventaFolio}).exec((err, venta) => {
            if (err) return res.status(500).send({messgae: "Error al obtener"});

            if (!venta) return res.status(404).send({message: "No hay ventas que mostrar"});

            return res.status(200).send({ venta });
        });
    },

    // Obtener todos las VENTAS
    getAllVentas: function(req, res) {
        Venta.find({}).exec((err, ventas) => {
            if (err) return res.status(500).send({message: "Error al obtener"});

            if (!ventas) return res.status(404).send({message: "No hay ventas que mostrar"});

            return res.status(200).send({ ventas })
        });
    },

    updateVenta: function(req, res) {
        var ventaId = req.params.id;
        var update = req.body;

        Venta.findByIdAndUpdate(ventaId, update, {new:true}, (err, ventaUpdated) => {
            if (err) return res.status(500).send({message: "No se ha podido actualizar"});

            if (!ventaUpdated) return res.status(404).send({message: "Venta no existente"});

            return res.status(200).send({
                venta: ventaUpdated
            })
        });
    },  

    // Eliminar una VENTA
    deleteVenta: function(req, res) {
        var ventaId = req.params.id;

        Venta.findByIdAndDelete(ventaId, (err, ventaRemoved) => {
            if (err) return res.status(500).send({message: "Error al obtener"});

            if (!ventaRemoved) return res.status(404).send({message: "Venta no existente"});

            return res.status(200).send({
                venta: ventaRemoved
            });
        });
    }
};

module.exports = ventaController;