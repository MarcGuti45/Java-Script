
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

/* altre metode: function Vocales(s = 'hola que tal com estas?') {
                    var vocales = 0;
                    for (var i = 0; i < s.length; i++) {
                        var c = s[i];

                        if (c == "a" || c == "e" || c == "i" || c == "o" || c == "u") {
                            vocales++;
                        }

                    }
                    console.log(vocales);
                }

                Vocales(); */
        

// Exercici 6 Funcions
function numeros(a, b, c = 7){
    return a+b+c  
}
console.log(numeros(23,12))

