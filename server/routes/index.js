const express = require('express');
var ProductoController = require('../controllers/producto.controller');
var ClienteController = require('../controllers/cliente.controller');
var VentaController = require('../controllers/venta.controller');

var router = express.Router();

// ROUTES CLIENTE
// Obtener cliente por ID
router.get('/clientes/:id', ClienteController.getCliente);
// Obtener todos los clientes
router.get('/clientes', ClienteController.getAllClientes);
// Crear cliente
router.post('/clientes', ClienteController.createCliente);
// Actualizar un cliente
router.put('/clientes/:id', ClienteController.updateCliente);
// Eliminar un cliente
router.delete('/clientes/:id', ClienteController.deleteCliente);
// Obtener cliente por nombre
router.get('/clientes/name/:nombre', ClienteController.findClienteByName);


// ROUTES PRODUCTO
// Obtener producto po ID
router.get('/productos/:id', ProductoController.getProducto);
// Obtener todos los clientes
router.get('/productos', ProductoController.getAllProductos);
// Crear producto
router.post('/productos', ProductoController.createProducto);
// Actualizar un producto
router.put('/productos/:id', ProductoController.updateProducto);
// Obtener por nombre de PRODUCTO
router.get('/productos/code/:code', ProductoController.findProductoByName);
// Eliminar producto por su id
router.delete('/productos/:id', ProductoController.deleteProducto);

// ROUTES VENTAS
// Obtener venta por folio
router.get('/ventas/:folio', VentaController.getVentaByFolio);
// Obtener todas las ventas
router.get('/ventas', VentaController.getAllVentas);
// Crear una venta
router.post('/ventas', VentaController.createVenta);
// Actualizar una venta
router.put('/ventas', VentaController.updateVenta);
// Elimina una venta
router.delete('/ventas/:id', VentaController.deleteVenta);

module.exports = router;