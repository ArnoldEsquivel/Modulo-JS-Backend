const fs = require('fs');

const createFile = (directory,file,data) => {
    fs.writeFile(`${directory}/${file}`, data, (err) => {
        if (err) {
            console.log(`No se pudo crear el archivo: ${file}`, err);
        } else {
            console.log("Archivo creado exitosamente")
        }
    });
};

const readFile = (directory,file) => {
    fs.readFile(`${directory}/${file}`,(err,data) => {
        if (err) {
            console.log(`No se pudo leer el archivo: ${file}`, err);
        } else {
            console.log(data.toString());
        }
    });
};

const updateFile = (directory,file,data) => {
    fs.writeFile(`${directory}/${file}`, data, (err) => {
        if (err) {
            console.log(`No se pudo actualizar el archivo: ${file}`, err);
        } else {
            console.log("Archivo actualizado exitosamente")
        }
    });
}

const deleteFile = (directory,file) => {
    fs.unlink(`${directory}/${file}`, (err) => {
        if (err) {
            console.log(`No se pudo borrar el archivo: ${file}`, err);
        } else {
            console.log("Archivo borrado exitosamente")
        }
    });
}

let accion = prompt("Que deseas hacer? 1: Crear, 2: Leer, 3: Actualizar, 4: Borrar");
switch (accion) {
    case "1":
        createFile(prompt("Ingresa la ruta del directorio"),
        prompt("Ingresa el nombre del archivo"),
        prompt("Ingresa el contenido del archivo"));
        break;
    case "2":
        readFile(prompt("Ingresa la ruta del directorio"),
        prompt("Ingresa el nombre del archivo"));
        break;
    case "3":
        updateFile(prompt("Ingresa la ruta del directorio"),
        prompt("Ingresa el nombre del archivo"),
        prompt("Ingresa el contenido a actualizar"));
        break;
    case "4":
        deleteFile(prompt("Ingresa la ruta del directorio"),
        prompt("Ingresa el nombre del archivo"));
        break;
}