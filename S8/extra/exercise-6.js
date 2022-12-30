function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }


const getUrl = async (url) => {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  };
  
const main = async () => {

    let arena = [];
    let characters = await getUrl('http://localhost:3000/characters');
    showGuerreros(characters,arena);

    const contenedor$$ = document.querySelector('body');

    // crea el boton luchar y deja invisible
    let midiv$$ = document.createElement('button');
    midiv$$.textContent='LUCHAR';
    midiv$$.className='boton invisible';    
    midiv$$.addEventListener('click',() => luchar(arena));

    // crea el boton reset y deja invisible
    let midiv2$$ = document.createElement('button');
    midiv2$$.textContent='RESET';
    midiv2$$.className='boton invisible';
    midiv2$$.addEventListener('click',() => reset(arena));

    // añade botones al contenedor
    contenedor$$.appendChild(midiv$$);
    contenedor$$.appendChild(midiv2$$);
};

const reset =(arena) =>{
    arena.pop();
    arena.pop();    
    showArena(arena);
    // quita visibilidad
    let midiv$$ = document.querySelectorAll('button');
    midiv$$[0].className='boton invisible';
    midiv$$[1].className='boton invisible';        
}

const jugar = (guerrero1) =>{
  console.log("jugada retrasada") ;
  let tiradaGuerrero1=0;
  guerrero1.damage.forEach(element => {    
    let jugada = element.split('d'); // crea un array de dos elementos con el numero de tiradas y el numero de caras del dado
    let veces = jugada[0];
    let caras = jugada[1];
    console.log('veces',veces,'caras',caras);
    for (let index = 0; index < veces; index++) {
        let incremento = Math.floor(Math.random() * caras) + 1;
        incremento === guerrero1.critic ? incremento *= 2:incremento;
        //  console.log('incremento',incremento);
        tiradaGuerrero1 += incremento;
        // console.log('acumulado',tiradaGuerrero1);
    }
});  
return tiradaGuerrero1;
}



// función que se llama recursiva hasta que hay un ganador
const luchar = async (arena) =>{
    let midiv$$ = document.querySelectorAll('button');    
    midiv$$[0].className='boton invisible';

    console.log('luchar');        
    const guerrero1 = arena[0];
    const guerrero2 = arena[1];
    let hayGanador=false;        
    // juega guerrero 1    
    let tirada = jugar(guerrero1); 
    guerrero2.vitality -= (tirada - guerrero2.defense);
    if(guerrero2.vitality <= 0){
        hayGanador=true;    
    }
    if(!hayGanador){
        // juega guerrero 2
        let tirada = jugar(guerrero2);
        guerrero1.vitality -= (tirada - guerrero1.defense);
        if(guerrero1.vitality<=0){
            hayGanador=true;      
        }
    }

    // bucle con rondas hasta que tengamos un ganador.
    if(!hayGanador){
        showArena(arena);        
        setTimeout(()=>luchar(arena),1000);
    }
    // cambia visibilidad
    if(hayGanador){
        let midiv$$ = document.querySelectorAll('button');    
        midiv$$[0].className='boton invisible';
        midiv$$[1].className='boton visible';
        showArena(arena);
    }
}





// const luchar = async (arena) =>{

//     const esperar = () =>{

//     }

//     console.log('luchar');        
//     const guerrero1 = arena[0];
//     const guerrero2 = arena[1];
//     let hayGanador=false;        
//     // juega guerrero 1
//     // let tirada = jugar(guerrero1);
//     let tirada = setTimeout(()=>jugar(guerrero1),5000); 
//     guerrero2.vitality -= (tirada - guerrero2.defense);

//     if(guerrero2.vitality <= 0){
//         hayGanador=true;            
//     }
//     if(!hayGanador){        
//         let tirada = setTimeout(()=>jugar(guerrero2),5000); 
//     }
//     guerrero1.vitality -= (tirada - guerrero1.defense);
//     if(guerrero1.vitality<=0){
//         hayGanador=true;      
//     }
//     // bucle con rondas hasta que tengamos un ganador.
//     if(!hayGanador){
//         // showArena(arena);        
//         setTimeout(()=>luchar(arena),2000);
//     }
//     // cambia visibilidad
//     let midiv$$ = document.querySelectorAll('button');    
//     midiv$$[0].className='boton invisible';
//     midiv$$[1].className='boton visible';
//     showArena(arena);
// }



// selecciona guerrero para luchar
const selectWarrior = (index,characters,arena) =>{ 
    console.log(arena);
    console.log(characters);
    if(arena.length===1){
        if(arena[0].name === characters[index].name){
            arena.pop();
            showArena(arena);
            return
        }
    }
    if(arena.length<2){        
        const warrior = {...characters[index]};
        console.log(warrior);
        arena.push(warrior);
        // warrior.vitality=9999;
        console.log('caracters',characters[index]);
        showArena(arena);
    }
    if(arena.length===2){
        midiv$$ = document.querySelector('button');
        midiv$$.className='boton visible';
        // ordena array arena de forma aleatoria
        arena = shuffle(arena);
    }
}

const showArena = (arena) =>{
    const contenedor$$ = document.querySelector('[data-function="arena"]')
    contenedor$$.innerHTML='';
    contenedor$$.className='arena';    
    for (let j = 0; j < arena.length ; j++){
        let character = arena[j];
        let midiv$$ = document.createElement("div");
        midiv$$.id=j;
        contenedor$$.appendChild(midiv$$); // añadimos la carta al contenedor
        // la clase depende de la vitalidad. para mostrar al perdedor
        midiv$$.className = 'c-characters__item';       
        if(character.vitality<=0){
            midiv$$.className = 'c-characters__looser';       
        }
        miname$$ = document.createElement('div');
        miname$$.textContent = character.name;
        miimg$$ = document.createElement('img');
        miimg$$.className = 'img';        
        miimg$$.src = character.avatar;
        mistats$$ = document.createElement('div');
        mistats$$.className='stats';
        mistats$$.innerHTML=`<div>critic:${character.critic}</div><div>defense:${character.defense}</div><div>vitality:${character.vitality}</div>`;
        midiv$$.appendChild(miimg$$);
        midiv$$.appendChild(miname$$);
        midiv$$.appendChild(mistats$$);
    }   

}



const showGuerreros = (characters,arena) =>{ 
    const contenedor$$ = document.querySelector('[data-function="characters"]')
    for (let j = 0; j < characters.length ; j++) { 
        const character = characters[j];        
        let midiv$$ = document.createElement("div");        
        midiv$$.onclick =() => selectWarrior(j,characters,arena);        
        contenedor$$.appendChild(midiv$$); // añadimos la carta al contenedor
        midiv$$.className = 'c-characters__item';        
        miname$$ = document.createElement('div');
        miname$$.textContent = character.name;
        miimg$$ = document.createElement('img');
        miimg$$.className = 'img';        
        miimg$$.src = character.avatar;
        mistats$$ = document.createElement('div');
        mistats$$.className='stats';
        mistats$$.innerHTML=`<div>critic:${character.critic}</div><div>defense:${character.defense}</div><div>vitality:${character.vitality}</div>`;
        midiv$$.appendChild(miimg$$);
        midiv$$.appendChild(miname$$);
        midiv$$.appendChild(mistats$$);
    };
}

main();


// otra forma de hacer una pausa de n segundos
// pausa = (seconds) => {    
//     console.log('inicio');
//     let d1 = Date.now();
//     let d2 = Date.now();
//     time= d2-d1;
//     while (time < (seconds * 1000)) {
//         let d2 = Date.now();
//         time= d2-d1;
//     }
//     console.log('fin');    
// }