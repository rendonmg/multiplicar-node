const argv = require('./config/yargs').argv; //el .argv al final quiere decir que argv (la constante)
//tomará el valor d elo que se está exportando en el módulo y que tiene nombre argv
//de lo contrario siempre que se usara tendría que ser argv.argv 
//(donde el primero es el nombre de la constante {el módulo} y el segundo el nombre del objeto o función a utilizar)
const colors = require('colors/safe');

const { crearArchivo: crearA, listarTabla: listarT } = require('./multiplicar/multiplicar');


let comando = argv._[0]; //acceder a la posición 0 del arreglo de argv de yargs
switch (comando) { //esto es como un select case
    case 'listar':
        listarT(argv.base, argv.limite);
        break;

    case 'crear':
        crearA(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(`${ archivo }`.underline)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}






//let base = 8;

//console.log(process.argv)
// let argv2= process.argv;
// console.log(argv2);

// console.log(argv.base);

// let parametro = argv[2]; //el argumento queda en la posición 2 (3 porque inicia en 0 el arreglo) del argv
// let base = parametro.split('=')[1];

//ojo si no se manda el tercer parámetro se genera error, y si no se introduce un número se genera otro error
//es difícil controlar el error
//ahora, si se le ingresa un parámetro distinto en la posición (3, primer argumento) toma el valor de ese y no de "base"
//hay paquetes que ayudan con este problema y con la documentación

//node --help (ayuda de Node)

//corrigiendo el manejo con yargs

// crearA(base)
//     .then(archivo => console.log(`Archivo creado: ${ archivo }`))
//     .catch(e => console.log(e));