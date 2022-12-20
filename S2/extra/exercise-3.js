const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

const rankingSounds={
    firecamp:0,
    waves:0,
}




for (const user of users) {
        
    let miObjeto=user['favoritesSounds']
    
    let miElemento = Object.keys(miObjeto);
    
    for(let i=0; i < miElemento.length; i++){

        console.log('e:',miElemento[i]);

        if(rankingSounds.hasOwnProperty(miElemento[i])){
            console.log('incrementar +1',miElemento[i],)
            console.log(rankingSounds[miElemento[i]])
            rankingSounds[miElemento[i]] = rankingSounds[miElemento[i]] + 1
        }



    } 
    
}
console.log('ranking',rankingSounds)

