let array = Array.from({length: 5}, () => Math.floor(Math.random() * 10));

    document.write("Array generat aleatoriament ----> " + array + " <br><br> ");
    document.write("Array ordenat de menor a major ----> " + array.sort() + " <br><br> ");
    document.write("Primera posicio array ----> " + array[0] + " <br><br> ")
    document.write("Ultima posicio array ----> " + array[4])