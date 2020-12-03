let Cliente = require('../models/Cliente');

var clienteController = {

    // Create CLIENTE
    createCliente: function(req, res) {
        var cliente = new Cliente();
        var params = req.body;

        cliente.nombre = params.nombre;
        cliente.sector = params.sector;
        cliente.domicilio = params.domicilio;
        cliente.rfc = params.rfc;
        cliente.correo = params.correo;

        cliente.save((err, clienteStored) => {
            if (err) return res.status(5001).send({message: "Error al guardar"});

            if (!clienteStored) return res.status(404).send({message: "No se ha podido guardar el curso"});

            return res.status(200).send({
                cliente: clienteStored
            });
        });
    },

    // Obtener un CLIENTE
    getCliente: function(req, res) {
        var clienteId = req.params.id;

        Cliente.findById(clienteId, (err, cliente) => {
            if (err) return res.status(500).send({message: "Error al obtener"});

            if (cliente) res.status(404).send({message: "Cliente no existente"});

            return res.status(200).send({
                cliente
            });
        });
    },

    // Obtener todos los CLIENTES
    getAllClientes: function(req, res) {
        Cliente.find().exec((err, clientes) => {
            if (err) return res.status(500).send({message: "Error al obtener"});

            if (!clientes) return res.status(404).send({message: "No hay clientes que mostrar"});

            return res.status(200).send({ clientes });
        });
    },

    // Actualizar un CLIENTE
    updateCliente: function(req, res) {
        var clienteId = req.params.id;
        var update = req.body;

        Cliente.findByIdAndUpdate(clienteId, update, {new:true}, (err, clienteUpdated) => {
            if (err) return res.status(500).send({message: "No se ha podido actualizar"});

            if (!clienteUpdated) return res.status(404).send({message: "Cliente no existente"});

            return res.status(200).send({
                cliente: clienteUpdated
            });
        });
    },

    // Borrar un CLIENTE
    deleteCliente: function(req, res) {
        var clienteId = req.params.id;

        Cliente.findByIdAndDelete(clienteId, (err, clienteRemoved) => {
            if (err) return res.status(500).send({message: "Error al eliminar"});

            if (!clienteRemoved) return res.status(404).send({message: "Cliente no existente"});

            return res.status(200).send({
                cliente: clienteRemoved
            });
        });
    },

    // Buscar por nombre de CLIENTE
    findClienteByName: function(req, res) {
        var nombre = req.params.nombre;

        Cliente.find({nombre: nombre}).exec((err, clientes) => {
            if (err) return res.status(500).send({message: "Error al obtener"});

            if (!clientes) return res.status(404).send({message: "No hay clientes que mostrar"});

            return res.status(200).send({ clientes });
        });
    }
}

module.exports = clienteController;