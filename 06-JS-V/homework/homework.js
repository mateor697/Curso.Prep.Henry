// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
  function Usuario(opciones) {
    this.usuario = opciones.usuarios;
    this,nombre = opciones.nombre;
    this.email = opciones.email;
    this.password = opciones.password;
  }
  Usuario.prototype.saludar = function(){
    return 'Hola,mi nombre es' + this.nombre;
  };
return Usuario;
}

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Constructor.prototype.saludar = function() {
    return 'Hello World!';
  };

}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  String.prototype.reverse = function () {
    var StringInvertida = '';
    for(var i = this.length - 1; i>=0; i--) {
      stringInvertida = stringInvertida + this.charAt(i);
    }
    return stringInvertida;
  };
}
class Persona {
  constructor (nombre,apellido,edad,domicilio) {
  this.nombre = nombre,
  this.apellido = apellido,
  this.edad = edad,
  this.domicilio = domicilio
  this.detalle = function() {
  return {
    Nombre: this.nombre,
    Apeliido: this.apellido,
    Edad: this.edad,
    domicilio: this.domicilio,
  }
  }
}
function crearInstanciaPersona(nombre,apellido,edad,dir) {
  const persona = new Persona (nombre,apellido,edad,dir);
  return persona;
}
function agregarMetodo() {
  Persona.prototype.datos = function() {
    retur this.nombre + '', '' + this.edad + "años";
  }
}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida
};
