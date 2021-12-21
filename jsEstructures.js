
// Exercici 1 Estructures de Dades
/*
let array = Array.from({length: 5}, () => Math.floor(Math.random() * 10));

    document.write("Array generat aleatoriament ----> " + array + " <br><br> ");
    document.write("Array ordenat de menor a major ----> " + array.sort() + " <br><br> ");
    document.write("Primera posicio array ----> " + array[0] + " <br><br> ")
    document.write("Ultima posicio array ----> " + array[4])
*/


// Exercici 2 Estructures de Dades
/*
let array = Array.from({length: 5}, () => Math.floor(Math.random() * 10));
    document.write(array)

    let array2 = [33, 79, 56, 12, ...array]
    document.write("<br><br>" + array2)
*/


// Exercici 3 Estructures de Dades
/*
let array = [5,6,7,8,9] 
let array2 = [6,7,3,4,2]
let array3 = array.concat(array2);
let senseDuplicats = [];

document.write(array3)

for (var i = 0; i < array3.length; i++) {
    let duplicats = array3[i];
    if (!senseDuplicats.includes(array3[i])) {
        senseDuplicats.push(duplicats);
    }
}
document.write("<br>" + senseDuplicats)
*/


// Exercici 4 Estructures de Dades



// Exercici 5 Estructures de Dades

var array = [5, 7, 2, 8, 12, 57];
var cub = array.map(function(x) {
   return Math.pow(x,3);
}
);

document.write("Array inicial ----> " + array + "<br>")
document.write("Array elevat al cub ----> " + cub)