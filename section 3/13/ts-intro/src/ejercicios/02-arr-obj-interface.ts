let habilidades: string[] = ['Bash','Counter','Healing'];

interface Personaje{
    nombre : String;
    hp : number;
    habilidades : String[];
    puebloNatal ?: string;
}


const personaje: Personaje = {
    nombre : 'Strider',
    hp : 100 ,
    habilidades: ['Bash','Counter','Healing'],
     
}

personaje.puebloNatal = 'Pueblo natal';


console.table(personaje);


