//requires
const fs = require('fs'); //filesystem
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            if (i != limite) {
                data += `${ base } * ${ i } = ${ base * i }\n`;
            } else {
                data += `${ base } * ${ i } = ${ base * i }`;
            }
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite}.txt`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tabla-${ base }-al-${ limite }.txt`)
            }
        });
    });
}

let listarTabla = (base, limite) => {
    console.log('=========================================='.green);
    console.log(`Tabla de ${ base } al ${ limite }`.green);
    console.log('=========================================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }
}

module.exports = {
    //crearArchivo: crearArchivo
    crearArchivo,
    listarTabla
}