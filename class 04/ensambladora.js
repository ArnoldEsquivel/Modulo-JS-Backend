const carro1 = {
    chasis: {
        vestidura: false,
        ensamblada: false,
    },
    carroceria: {
        puertas: false,
        ventanas: 0,
        lijada: false,
        color: "",
        llantas: 0,
    },
    gasolina: 0,
    aceite: 0,
    limpio: false,
    locacion: "Fabrica",
    inventariado: false,
    exhibido: false, 
};

const construirChasis = async (carro) => {
    const vestir = (carro) => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                if (!carro.chasis.vestidura) {
                    carro.chasis.vestidura = true;
                    console.log("Chasis vestido");
                    resolve(carro);
                } else {
                    reject("El chasis ya esta vestido");
                }
            }, 1000);
        });
    }
    const ensamblar = (carro) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!carro.chasis.ensamblada) {
                    carro.chasis.ensamblada = true;
                    console.log("Chasis ensamblado");
                    resolve(carro);
                } else {
                    reject("El chasis ya esta ensamblado");
                }
            }, 1000);
        });
    }
    const chasisVestido = await vestir(carro);
    const chasisEnsamblado = await ensamblar(chasisVestido);
    return chasisEnsamblado;
}

const montarCarroceria = async (carro) => {
    const montarPuertas = (carro) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!carro.carroceria.puertas) {
                    carro.carroceria.puertas = true;
                    console.log("Puertas montadas");
                    resolve(carro);
                } else {
                    reject("Las puertas ya estan montadas");
                }
            }, 1000);
        });
    }
    const montarVentanas = (carro) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!carro.carroceria.ventanas) {
                    carro.carroceria.ventanas = 4;
                    console.log("Ventanas montadas");
                    resolve(carro);
                } else {
                    reject("Las ventanas ya estan montadas");
                }
            }, 1000);
        });
    }
    const lijar = (carro) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!carro.carroceria.lijada) {
                    carro.carroceria.lijada = true;
                    console.log("Carroceria lijada");
                    resolve(carro);
                } else {
                    reject("La carroceria ya esta lijada");
                }
            }, 1000);
        });
    }
    const pintar = (carro) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!carro.carroceria.color) {
                    carro.carroceria.color = "rojo";
                    console.log("Carroceria pintada");
                    resolve(carro);
                } else {
                    reject("La carroceria ya esta pintada");
                }
            }, 1000);
        });
    }
    const montarLlantas = (carro) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (carro.carroceria.llantas == 0) {
                    carro.carroceria.llantas = 4;
                    console.log("Llantas montadas");
                    resolve(carro);
                } else {
                    reject("Las llantas ya estan montadas");
                }
            }, 1000);
        });
    }
    const puertasMontadas = await montarPuertas(carro);
    const ventanasMontadas = await montarVentanas(puertasMontadas);
    const carroLijado = await lijar(ventanasMontadas);
    const carroPintado = await pintar(carroLijado);
    const llantasMontadas = await montarLlantas(carroPintado);
    return llantasMontadas;
}

const preparacionFinal = async (carro) => {
    const llenarTanque = (carro) =>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (carro.gasolina == 0) {
                    carro.gasolina = 100;
                    console.log("Tanque lleno");
                    resolve(carro);
                } else {
                    reject("El tanque ya esta lleno");
                }
            }, 1000);
        });
    }
    const llenarAceite = (carro) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (carro.aceite == 0) {
                    carro.aceite = 100;
                    console.log("Aceite lleno");
                    resolve(carro);
                } else {
                    reject("El aceite ya esta lleno");
                }
            }, 1000);
        });
    }
    const limpieza = (carro) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!carro.limpio) {
                    carro.limpio = true;
                    console.log("El carro se ha lavado");
                    resolve(carro);
                } else {
                    reject("El carro ya esta limpio");
                }
            }, 1000);
        });
    }
    const localizacion = (carro) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (carro.locacion == "Fabrica") {
                    carro.locacion = "Exhibicion";
                    console.log("El carro se ha llevado a la Agencia");
                    resolve(carro);
                } else {
                    reject("El carro ya esta en la agencia");
                }
            }, 1000);
        });
    }
    const inventariadoAgencia = (carro) => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                if (!carro.inventariado) {
                    carro.inventariado = true;
                    console.log("El carro se ha inventariado");
                    resolve(carro);
                } else {
                    reject("El carro ya esta inventariado");
                }
            }, 1000);
        })
    }
    const exhibicion = (carro) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!carro.exhibido) {
                    carro.exhibido = true;
                    console.log("El carro se ha llevado a sala de exhibición");
                    resolve(carro);
                } else {
                    reject("El carro ya esta exhibido");
                }
            }, 1000);
        });
    }

    const tanqueLleno = await llenarTanque(carro);
    const aceiteLleno = await llenarAceite(tanqueLleno);
    const carroLimpio = await limpieza(aceiteLleno);
    const carroEnAgencia = await localizacion(carroLimpio);
    const carroInventariado = await inventariadoAgencia(carroEnAgencia);
    const carroExhibido = await exhibicion(carroInventariado);
    return carroExhibido;
}

const armarCarro = () => {

    construirChasis(carro1)
        .then(montarCarroceria)
        .then(preparacionFinal)
        .then((result) => {
            // console.log(result);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log("Fabrización Finalizada");
        });
}


