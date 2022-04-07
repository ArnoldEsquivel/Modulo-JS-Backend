// fs = File Sistem
const fs = require('fs');

// Esta es una forma de crear un archivo
fs.writeFile(`${__dirname}/hello.txt`, "Este es un nuevo archivo creado con Node.js por segunda ocasión", (err) => {
    if (err) {
        console.log("No se pudo crear el archivo:", err);
    } else {
        console.log("Archivo creado con éxito");
    }
});

// Esta es otra forma de crearlo en donde vemos los parametros que recibe
const createFile = (directoryPath, fileName, data) => {
    fs.writeFile(`${directoryPath}/${fileName}`, data, (err) => {
        if (err) {
            console.log("No se pudo crear el archivo:", err);
        } else {
            console.log("Archivo creado con éxito");
        }
    });
}
createFile()

// Con esta funcion podemos leer un archivo
fs.readFile(`${__dirname}/filesystem.txt`,(err, data) => {
    if (err) {
        console.log("Hubo un error", err);
    } else {
        console.log(data.toString());
    }
});

// Con esta funcion podemos borrar un archivo
fs.unlink(`${__dirname}/hello.txt`, (err) => {
    if (err) {
        console.log("No se pudo borrar el archivo:", err);
    } else {
        console.log("Archivo borrado con éxito");
    }
});