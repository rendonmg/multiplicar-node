const opts = {
    base: {
        demand: true, //obligatorio
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}



const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de mutiplicar', opts)
    .command('crear', 'Crea el archivo con la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}