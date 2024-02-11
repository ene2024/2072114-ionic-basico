var miVariable = 5; //numerico
var campotexto = document.getElementById("mitxt");
var texto = "";//campotexto.value = "";
function Mifuncion(mitxt) {
    //alert(y);
    texto = campotexto.value;
    alert(texto);
}
function cambiarColor() {
      
      var colores = ["red", "blue", "green", "yellow", "orange", "purple", "pink"];      
      var indice = Math.floor(Math.random() * colores.length);      
      var color = colores[indice];
      document.body.style.backgroundColor = color;
    }
function borrarCampo() {     
    campotexto.value = '';
      }

Mifuncion();
cambiarColor();
borrarCampo();