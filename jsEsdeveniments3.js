// Exercici 3 Esdeveniments
document.onkeydown = function(Tecla){ 
    acumulador = acumulador + Tecla.key;
    document.getElementById("mostrarTecla").innerHTML = acumulador;
}
let acumulador = '';


