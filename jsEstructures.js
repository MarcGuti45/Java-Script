
// Exercici 1 Estructures de Dades
/*
let array = Array.from({length: 5}, () => Math.floor(Math.random() * 10));

    document.write("Array generat aleatoriament ----> " + array + " <br><br> ");
    document.write("Array ordenat de menor a major ----> " + array.sort() + " <br><br> ");
    document.write("Primera posicio array ----> " + array[0] + " <br><br> ")
    document.write("Ultima posicio array ----> " + array[4])
*/


// Exercici 2 Estructures de Dades

let array = Array.from({length: 5}, () => Math.floor(Math.random() * 10));
    document.write(array)

    let array2 = [33, 79, 56, 12, ...array]
    document.write("<br><br>" + array2)
