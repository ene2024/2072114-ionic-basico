function login() {
  var usuario = document.getElementById("usuario").value;
  var mensaje = "Inicio de sesion correcto. Usuario: " + usuario;
  mostrarMensaje(mensaje);
}

function registro() {
  var usuario = document.getElementById("usuario").value;
  var mensaje = "Registro exitoso. Usuario: " + usuario;
  mostrarMensaje(mensaje);
}

function mostrarMensaje(mensaje) {
  var mensajeElemento = document.getElementById("mensaje");
  mensajeElemento.innerText = mensaje;
}
