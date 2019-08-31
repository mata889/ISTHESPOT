var cuentaorden = require('../schemas/cuentaorden.js');
var mongoose = require('mongoose');

exports.getCuentaOrden = {
  
  handler: function(request, reply){
    var cuentasordenes = cuentaorden.find({});
    return(cuentasordenes);
  }
}
exports.getCuentaOrdenId = {
  
  handler : function(request, reply){
    cuentaorden.findOne({'_id' : request.params._id}, function(err, CuentaOrden){
      if(!err && CuentaOrden){
        return (CuentaOrden);
      }else if(!err){
        return (boom.notFound());
      }else if(err){
        return (boom.wrap(err, 'cuenta orden not found'));
      }
    });
    
  }
}
exports.getCuentaOrdenCuenta = {
  handler : function(request, reply){
    cuentaorden.find({'idCuenta' : request.params.idCuenta}, function(err, CuentaOrden){
      if(!err && CuentaOrden){
        return (CuentaOrden);
      }else if(!err){
        return (boom.notFound());
      }else if(err){
        return (boom.wrap(err, 'cuenta not found'));
      }
    });
  }
}
exports.getCuentaOrdenOrden = {
  
  handler : function(request, reply){
    cuentaorden.find({'idOrden' : request.params.idOrden}, function(err, CuentaOrden){
      if(!err && CuentaOrden){
        return (CuentaOrden);
      }else if(!err){
        return (boom.notFound());
      }else if(err){
        return (boom.wrap(err, 'orden not found'));
      }
    });
  }
}
exports.getCuentaOrdenDescripcion = {
  handler : function(request, reply){
    cuentaorden.find({'descripcion' : request.params.descripcion}, function(err, CuentaOrden){
      if(!err && CuentaOrden){
        return (CuentaOrden);
      }else if(!err){
        return (boom.notFound());
      }else if(err){
        return (boom.wrap(err, 'descripcion not found'));
      }
    });
  }
}
exports.modifyCuentaOrden = {
  
  handler: function(request, reply){
    cuentaorden.update(
      {'_id': request.params._id},
      {$set:
        {
          idCuenta : request.payload.idCuenta,
          idOrden : request.payload.idOrden,
          descripcion : request.payload.descripcion,
        }
      }, function(err){
        if(err){
          return (boom.wrap(err, 'CuentaOrden not found'));
        }else{
          return ('updated succesfully');
        }
      }
    );
  }
}
exports.deleteCuentaOrden = {
  
  handler: function(request, reply){
    cuentaorden.deleteMany({'idCuenta' : request.params._id}, function(err, CuentaOrden){
      if(err){
        return (boom.badRequest("Could not delete CuentaOrden"));
      }else if(!err && CuentaOrden){
        //CuentaOrden.remove();
        return ('CuentaOrden deleted succesfully');
      }else if(!err){
        return (boom.notFound());
      }
    });
  }
}
exports.createCuentaOrden = {
  
  handler: function(request, reply){
    var newCuentaOrden = new cuentaorden({
      idCuenta : request.payload.idCuenta,
      idOrden : request.payload.idOrden,
      descripcion : request.payload.decripcion,
    });
    newCuentaOrden.save(function(err){
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
