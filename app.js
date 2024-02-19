//Se usa que query selector para trabajar en el javascript y el html juntos


// se llama la funcion desde el html con el function, le damos a la funcion un parametro 
let numeroSecreto = generarNumeroSecreto();     
let intentos = 1
let numeroMaximo = 10

function asignarTextoElemento (elemento, texto) {
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function VerificarIntento() {
let numeroDeUsuario = parseInt(document.getElementById("valorusuario").value);


if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento ('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
    // Se usa el getelement para llamar la funcion reiniciar y se remueve el atributo con removeatribute para que funcione el boton 
} else {
    if (numeroDeUsuario > numeroSecreto) {
    asignarTextoElemento ("p", "el numero secreto es menor");
}   else {
    asignarTextoElemento ("p", "El numero secreto es mayor");
}
intentos++;
limpiarCaja();

// se asigna una sola funcion y se llama la misma 3 veces esto para tener menos codigo 
// se usan las comillas invertidas y el signo $ mas {} para hacer el alert en la pagina
// se usa el operador ternario para reducir el codigo y que la palabra vez o veces se use dependiendo de los numeros de intentos 
}
return;
}

function limpiarCaja(){
    document.querySelector('#valorusuario').value = '';
}
// se usa queryselector para que es un selector generico y se coloca el id del input

asignarTextoElemento ("h1", "juego del numero secreto!"); 
asignarTextoElemento ("p", `indica un número del 1 al ${numeroMaximo}`); 

// se uso la funcion para reducir el codigo y eliminar la declaracion de variables se usa dos funciones elemento y texto

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    // si el numero generado esta incluido en la lista }
    if (listaNumerosorteados.length == numeroMaximo) {
           asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')
    } else {

    if (listaNumerosorteados.includes(numeroGenerado)){
        return generarNumeroSecreto ();
    } else {
        listaNumerosorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

}
function condicionesIniciales(){
    asignarTextoElemento ("h1", "juego del numero secreto!"); 
    asignarTextoElemento ("p", `indica un número del 1 al ${numeroMaximo}`); 
    numeroSecreto = generarNumeroSecreto();
     intentos = 1;
}
   //limpiamos la caja 
   //indicar intervalor de numeros
   //generar numero aleatorio
   // dejar el boton nuevamente deshabilitado
   //Inicializar el numero de intentos
function reiniciarJuego(){
  limpiarCaja();
  condicionesIniciales();
  document.querySelector('#reiniciar').setAttribute('disabled','true');
  // se usa el query para llamar el reiniciar y se usa el set para deshabilitar el boton de nuevo juego
}

condicionesIniciales();
// se usa el return para eliminar la variable let