// Pedir orden de comida
// El mesero captura la orden
// El mesero pasa la orden a la cocina
// Los chefs preparan las ordenes
// El mesero entrega la orden en la mesa

const open = (ingredient) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`${ingredient} abierto`)
            resolve(ingredient);
        }, 1000);
    });
};

const freir = (ingredient) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (ingredient == "Huevohh") {
                console.log(`${ingredient} frito`);
                resolve(ingredient);
            } else {
                reject (`${ingredient} no se puede freir`);
            }
        }, 1000);
    });
};

const placeSauce = (ingredient) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`${ingredient} bañado`);
            resolve(ingredient);
        }, 1000);
    });
};

// Al crear los procesos por fuera asignandoles un tiempo podemos
// hacer que los procesos se ejecutemn en un tiempo y orden especifico
const cookCowboyEggs = () => {
    const ingredient = "Huevo"
    
    open(ingredient)
    .then(freir)
    .then(placeSauce)
    .then((result) => {
        console.log(`${result} listo para servir`);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log("Proceso terminado");
    });
}

const partir = (ingredient) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`${ingredient} partido`);
            resolve(ingredient);
        }, 1000);
    });
};

const embarrar = (ingredient) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`${ingredient} embarrado de frijoles`);
            resolve(ingredient);
        }, 1000);
    });
}

const gratinar = (ingredient) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`${ingredient} gratinado`);
            resolve(ingredient);
        }, 1000);
    });
}

const hornear = (ingredient) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`${ingredient} hornado`);
            resolve(ingredient);
        }, 1000);
    });
}

const cookMolletes = () => {
    const ingredient = "Bolillo"

    partir(ingredient)
    .then(embarrar)
    .then(gratinar)
    .then(hornear)
    .then((result) => {
        console.log(`${result} listo para servir`);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log("Proceso terminado");
    });
};

const freirTortilla = (ingredient) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`${ingredient} frita`);
            resolve(ingredient);
        }, 1000);
    });
}

const colocarSalsa = (ingredient) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`${ingredient} colocada`);
            resolve(ingredient);
        }, 1000);
    });
}

const cookChilaquiles = () => {
    const ingredient = "Tortilla";
    const ingredient2 = "Salsa";

    freirTortilla(ingredient)
    .then(colocarSalsa(ingredient2))
    .then((result) => {
        console.log(`${result} listo para servir`);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log("Proceso terminado");
    });
};

// const order1 = cookCowboyEggs();
// const order2 = cookMolletes();
const order3 = cookChilaquiles();

