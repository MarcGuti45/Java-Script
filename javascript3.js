
// Exercici 1 Funcions
/* function nom(nom, cognom){
    console.log(nom + cognom)
}
nom('Marc', ' Gutiérrez') */


// Exercici 2 Funcions
/* function fhola(nom = 'hola'){
    console.log(typeof nom)
}
fhola() */


// Exercici 3 Funcions
/* function fdata(data = new Date){
    console.log(data) 
}
fdata() */


// Exercici 4 Funcions
/* function fvar(){
    var hola = 'Bon dia';
}
console.log(hola); */


// Exercici 5 Funcions
/* function vocal(str){
    const count = str.match(/[aeiou]/gi).length;
    return count;
}
const string = 'hola que tal bon dia senyor'
const resultat = vocal(string)
console.log(resultat) */
        

// Exercici 6 Funcions
/* function numeros(a, b, c = 7){
    return a+b+c  
}
console.log(numeros(23,12)) */


// Exercici 7 Funcions   
/* function fdata(data = new Date()){
    console.log(data)
}

function numeros(a,b,c = 7){
    return a+b+c;
}

function ex7(a,b,c){
    fdata();
    return numeros(a,b,c)
}
console.log(ex7(3,56,21)); */


// Exercici 8 Funcions
/* function numero(a,b){
    if (a == 30 || b == 30 || a+b == 30) {
        return true;
    } 
}
console.log(numero(10,20)) */


// Exercici 9 Funcions
/* var numero = function(a,b){
    if (a == 30 || b == 30 || a+b == 30) {
    return true
    }
}
console.log(numero(28,2)) */


// Exercici 10 Funcions
/* var mateix = (a,b) => {
    if (a === b)
    return true
    else return false
}
console.log(mateix(7,6)) */


// Exercici 11 Funcions
/* var arrel = a => Math.sqrt(a).toFixed(2)
console.log(arrel(3.33)) */


// Exercici 12 Funcions
var minuscula = a => a.toLowerCase()
console.log(minuscula("Hola Bon Dia Com Anem"))