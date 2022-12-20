
// Dado el siguiente javascript usa forof y forin para hacer la media del volumen
// de todos los sonidos favoritos que tienen los usuarios.

// asumimos que NO todos tienen propiedad volumen.

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

// console.log(user.favoritesSounds.waves.volume)

let totVol=0;
let totElem=0;

for (const user of users) {   
    for (const key in user) {
        const element = user[key];
        // console.log(key)    
        if (key==='favoritesSounds') {
            // console.log(element);
            for (const key2 in element) {            
                const element2 = element[key2];
                // console.log(element2.volume);
                totVol += element2.volume;
                totElem++;
            }
        }    
    }
}
    
console.log('Media:',totVol/totElem);



