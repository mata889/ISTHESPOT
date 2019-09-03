var mongoose = require('mongoose');

var InsumoSchema = new mongoose.Schema({
  nombre : String,
  inventario : Number,
  idProveedor: String,
  Imagen: String
});

module.exports = mongoose.model('insumo', InsumoSchema);
