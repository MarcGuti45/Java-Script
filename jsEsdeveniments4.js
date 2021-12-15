// Exercici 4 Esdeveniments
window.onload = function(){
    var acumulador = 0;
    document.getElementById("foto").onclick = function(){
        acumulador++;
        document.getElementById("contador").innerHTML = acumulador
    }

    document.getElementById("boton").onclick = function() {
        acumulador = 0
        document.getElementById("contador").innerHTML = acumulador
    }
}