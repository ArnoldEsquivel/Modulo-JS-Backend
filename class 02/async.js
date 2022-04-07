const greeting = (name) => {
    setTimeout(() => {
        console.log(`Hola ${name}`);
    }, 1000);
}
const goodbye = (name) => {
    setTimeout(() => {
        console.log(`Adios ${name}`);
    }, 1500);
}

console.log("Iniciando Programa");
greeting("Le Paque", goodbye("Le Paque22"));

const callback = () => {
    console.log("Esto se esta ejecutando en un segundo proceso.")
}

// console.log("Iniciando Proceso...");
// setTimeout(callback,1000);
// console.log("Esto se esta ejecutando en primer plano");
// console.log("Terminando Proceso...");