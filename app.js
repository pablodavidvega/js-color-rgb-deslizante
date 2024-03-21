const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

//Actuslizar el valor de los parrafos
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

function actualizarColor(rojo, verde, azul) {
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
  document.body.style.backgroundColor = colorRGB;
}

//actualizar Red(rojo).
// En este caso a diferencia de los otros dos abajo verde y azul se puede ejecutar de las dos formas usando (e) que identifica el evento y taget ó tambien se puede con la variable global inputRojo
inputRojo.addEventListener('change', (e) => {  //A diferencia de los otros dos aqui lo hice agregando (e) con el parametro event que funciona en caso que, en otro ejercicio no se pueda obtener el valor del evento de este elemento
  rojo = e.target.value;
  textoRojo.innerText = rojo;
  actualizarColor(rojo, verde, azul);
});
//actualizar Green(verde).
inputVerde.addEventListener('change', () => {
  verde = inputVerde.value;
  textoVerde.innerText = verde;
  actualizarColor(rojo, verde, azul)
})
//actualizar Azul(blue).
inputAzul.addEventListener('change', () => {
  azul = inputAzul.value;
  textoAzul.innerText = azul;
  actualizarColor(rojo, verde, azul);
})