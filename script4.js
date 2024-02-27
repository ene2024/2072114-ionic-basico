
function agregarGasto() {
 
  var tipoGasto = document.getElementById("tipoGasto").value.trim();
  var monto = parseFloat(document.getElementById("monto").value);
  var listaGastos = document.getElementById("listaGastos");
  var nuevoElemento = document.createElement("ion-item");
  nuevoElemento.innerText = `${tipoGasto}: $${monto.toFixed(2)}`;
  listaGastos.appendChild(nuevoElemento);
  var totalElemento = document.getElementById("total");
  var totalActual = parseFloat(totalElemento.innerText);
  totalElemento.innerText = (totalActual + monto).toFixed(2);
  document.getElementById("tipoGasto").value = "";
  document.getElementById("monto").value = "";
}
