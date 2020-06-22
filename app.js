const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        descripcion: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }

}).argv;

// lugar.getLugar(argv.direccion).then(console.log)
//     .catch(error => console.log('Sin resultados'));
// const getInfo = async(direccion) => {
//     const Latitud = (await lugar.getLugar(direccion)).Latitud;
//     const Longitud = (await lugar.getLugar(direccion)).Longitud;

//     if (Latitud != null && Longitud != null) {
//         const temp_ciudad = await clima.getClima(Latitud, Longitud);
//         return temp_ciudad;
//     } else {
//         console.log(`No se pudo obtener temperatura para ${direccion}`);
//     }
// }

const getInfo = async(direccion) => {


    try {
        const coords = await lugar.getLugar(direccion);
        const temp = await clima.getClima(coords.Latitud, coords.Longitud);
        return `El clima de ${coords.Ciudad} es de ${temp}.`;
    } catch (e) {
        console.log(`No se pudo obtener temperatura para ${direccion}`);
    }
}

getInfo(argv.direccion).then(
        console.log
    )
    .catch(console.log);