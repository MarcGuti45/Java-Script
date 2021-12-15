// Exercici 5 Esdeveniments
document.onkeydown = function(a){ 
    combinacioTecles = combinacioTecles + a.key;
    if(combinacioTecles == "gru"){
        window.open( url= "https://www.youtube.com/watch?v=RCA3EfKUJMw")
    }
}
let combinacioTecles = '';