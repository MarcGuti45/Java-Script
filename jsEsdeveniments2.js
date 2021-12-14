// Exercici 2 Esdeveniments
document.onkeydown = function(Tecla){
    document.getElementById("mostrarTecla").innerHTML = Tecla.key;
}

document.onkeyup = function(Tecla){
    document.getElementById("mostrarTecla").innerHTML = " ";
}