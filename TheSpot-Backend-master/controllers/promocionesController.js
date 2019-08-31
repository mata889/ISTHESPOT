var promocion = require('../schemas/promocion.js');
var mongoose = require('mongoose');

exports.getPromociones = {
  /*auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal']
  },*/
  handler: function(request, reply){
    var promociones = promocion.find({});
    return(promociones);
  }
}
exports.getPromocionId = {
  /*auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal']
  },*/
  handler : function(request, reply){
    promocion.findOne({'_id' : request.params._id}, function(err, Promocion){
      if(!err && Promocion){
        return (Promocion);
      }else if(!err){
        return (boom.notFound());
      }else if(err){
        return (boom.wrap(err, 'Promocion not found'));
      }
    });
  }
}
exports.getPromocionProductos = {
  /*auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal', 'cliente']
  },*/
  handler : function(request, reply){
    promocion.find({'idProducto' : request.params.idProducto}, function(err, Promocion){
      if(!err && Promocion){
        return (Promocion);
      }else if(!err){
        return (boom.notFound());
      }else if(err){
        return (boom.wrap(err, 'Promocion not found'));
      }
    });
  }
}
exports.getPromocionDescuento = {
  /*auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal', 'cliente']
  },*/
  handler : function(request, reply){
    promocion.find({'idProveedor' : request.params.descuento}, function(err, Promocion){
      if(!err && Promocion){
        return (Promocion);
      }else if(!err){
        return (boom.notFound());
      }else if(err){
        return (boom.wrap(err, 'Promocion not found'));
      }
    });
  }
}
exports.getPromocionName = {
  /*auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal', 'cliente']
  },*/
  handler : function(request, reply){
    promocion.find({'nombre' : request.params.nombre}, function(err, Promocion){
      if(!err && Promocion){
        return (Promocion);
      }else if(!err){
        return (boom.notFound());
      }else if(err){
        return (boom.wrap(err, 'Promocion not found'));
      }
    });
  }
}
exports.getPromocionHora_Inicio = {
  /*auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal', 'cliente']
  },*/
  handler : function(request, reply){
    promocion.find({'hora_inicio' : request.params.hora_inicio}, function(err, Promocion){
      if(!err && Promocion){
        return (Promocion);
      }else if(!err){
        return (boom.notFound());
      }else if(err){
        return (boom.wrap(err, 'Promocion not found'));
      }
    });
  }
}
exports.getPromocionHora_Final = {
  /*auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal', 'cliente']
  },*/
  handler : function(request, reply){
    promocion.find({'hora_final' : request.params.hora_final}, function(err, Promocion){
      if(!err && Promocion){
        return (Promocion);
      }else if(!err){
        return (boom.notFound());
      }else if(err){
        return (boom.wrap(err, 'Promocion not found'));
      }
    });
  }
}
exports.modifyPromocion = {
  /*auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },*/
  handler: function(request, reply){
    promocion.update(
      {'_id': request.params._id},
      {$set:
        {
          idProducto : request.payload.idProducto,
          nombre : request.payload.nombre,
          descripcion : request.payload.descripcion,
          cantidad : request.payload.cantidad,
          descuento : request.payload.descuento,
          hora_inicio : request.payload.hora_inicio,
          hora_final : request.payload.hora_final
        }
      }, function(err){
        if(err){
          return (boom.wrap(err, 'Promocion not found'));
        }else{
          return ('updated succesfully');
        }
      }
    );
  }
}
exports.deletePromocion = {
  /*auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },*/
  handler: function(request, reply){
    promocion.findOne({'_id' : request.params._id}, function(err, Promocion){
      if(err){
        return (boom.badRequest("Could not delete promocion"));
      }else if(!err && Promocion){
        Promocion.remove();
        return ('Promocion deleted succesfully');
      }else if(!err){
        return (boom.notFound());
      }
    });
  }
}
exports.createPromocion = {
  /*auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },*/
  handler: function(request, reply){
    var newPromocion = new promocion({
      idProducto : request.payload.idProducto,
      nombre : request.payload.nombre,
      descripcion : request.payload.descripcion,
      cantidad : request.payload.cantidad,
      descuento : request.payload.descuento,
      hora_inicio : request.payload.hora_inicio,
      hora_final : request.payload.hora_final
    });
    newPromocion.save(function(err){
      if(!err){
        return ({
          success: true
        });
      }else{
        return ({
          success: false
        })
      }
    });
  }
}
