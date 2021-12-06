// Exercici 1 Lógica
/*
var numero = 49

if ((numero % 3) == 0){
    console.log("El numero es multiple de 3")
}
else if ((numero % 7) == 0){
    console.log("El numero es multiple de 7")
}
else{
    console.log("El numero no es multiple ni de 3 ni de 7")
}
*/


// Exercici 2 Lógica
/*
var x = 50
var y = 9


var rangx = x >= 10 && x <= 50 
? console.log("El numero " , x , " esta dins del rang")
: console.log("El numero " , x , " no esta dins del rang")

var rangy = y >= 10 && x <= 50 
? console.log("El numero " , y , " esta dins del rang")
: console.log("El numero " , y , " no esta dins del rang")
*/


// Exercici 3 Lógica
/*
var x = 5

switch (true){
    case x >= 0 && x <= 4.99: 
    console.log("Suspes");
    break;

    case x >= 5 && x <= 5.99: 
    console.log("Suficient");
    break;

    case x >= 6 && x <= 6.99: 
    console.log("Be");
    break;

    case x >= 7 && x <= 8.99: 
    console.log("Notable");
    break;

    case x >= 9 && x <= 10: 
    console.log("Excellent");
    break;
}
*/


// Exercici 4 Lógica
/*
var x = 15
var n = 0
var i1 = 1
var i2 = 2
var contador = 0
var acumulador = 0

while (acumulador <= x){
    n++
    contador= i1 + i2
    i1=0
    i2++
    acumulador+=contador
}

console.log("El total de n es: " +  n)

let num = 15;
let suma = 0;
let i = 0;

while (suma <= num){
    i++;
    suma += i;
}
document.write("Maxim iteracions: " + Number(i-1));
*/


// Exercici 5 Lógica
/*
var string  = "Hola bona tarda em dic Marc i tinc 18 anys i avui es dia 30 del 12"
var numero = string.replace(/[^0-9]/ig, "");

var a = 0;

for (var i = 0; i < numero.length; i++){
    a += Number(numero.charAt(i));
}
console.log(a);

let cadena = "a3fdgrtgr67fgffdf";
let suma = 0;

for (i = 0; i < cadena.length; i++){
    if (Number(cadaena[i])){
        suma += Number(cadena[i])
    }
}
console.log(suma)
*/


// Exercici 6 Lógica
/*
var array = [7,5,9]
let resultat = array.sort((a,b)=> a-b).reverse().join(", ")

console.log(resultat)
*/


// Exercici 7 Lógica
/*
var numero = 7
var contador = 0

while (contador < numero){
    contador++
    console.log(contador)
    if (contador % 2 == 0)
    console.log("El numero es parell ")
    else 
    console.log("El numero es senar ")
}
*/


// Exercici 8 Lógica
/*
function arbre(fila) {
    for (let i = 0; i < fila; i++) {
        let fila = '';
        for (let j = 0; j < i + 1; j++) {
            fila = fila + '*';
        }
        console.log(fila)
    }
}

arbre(5);

for(i = 1; i <= 5; i++){
    for(j = 1; j < i+1; j++){
        console.log("*");
    }
    console.log("<br/>");
}
*/


// Exercici 9 Lógica
/*
var contador1 = 0;
var contador2 = 0;
var multiples3 = 0;
var multiples5 = 0;

do {
    if ((contador1 % 3 == 0) && (contador2 % 5 == 0)){
        multiples3 = contador1 + multiples3;
        multiples5 = contador2 + multiples5;
    }
    else {
        if (contador1 % 3 == 0) {
            multiples3 = contador1 + multiples3;
        }
        else if (contador2 % 5 == 0 ) {
            multiples5 = contador2 + multiples5;
        }
    }
    contador1++;
    contador2++;
} while (contador1 <= 1000);

console.log("La suma dels multiples de 3 i els multiples de 5 es: " + (multiples3 + multiples5));
*/


// Exercici 10 Lógica
function arbre(fila) {
    hola:
    for (let i = 0; i < fila; i++) {
        let fila = '';
        for (let j = 0; j < i + 1; j++) {
            fila = fila + '*';
        }
        for (var j = 0; j < i * 2 - 1; ++j) {
            fila = fila + '*';   
        }
        console.log(fila)
        continue hola;
    }
}

arbre(5);

// Exercici 11 Lógica
function cambiarNumeros (){
    var numero = 235654
    var array = Array.from([2, 3, 5, 6, 5, 4])
    console.log(array)
    var count = 0
    for (var i = 0; i < array.length - count; i++){
        if (i % 2 !== 0){
            var temp = array[i]
            array[i] = array[i - 1];
            array [i - 1] = temp
        }
    }
    console.log(array)
}
cambiarNumeros()
