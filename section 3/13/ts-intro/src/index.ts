interface Reproductor{
    volumen : number;
    segundo : number;
    cancion : string;
    detalles : Detalles;

}


interface Detalles{
    autor: string;
    anio : number;

}


const reproductor : Reproductor = {
    volumen : 90,
    segundo : 36,
    cancion : 'Mess',
    detalles : {
        autor : 'Ed Sheeran',
        anio : 2015   
    }

}

const{}

console.log('El volumen actual de: ', reproductor.volumen);
console.log('El segundo actual de: ', reproductor.segundo);
console.log('La cancion actual de: ', reproductor.cancion);
console.log('El autor es: ', reproductor.detalles.autor);











