// En base al siguiente javascript, usa destructuring para crear 2 variables 
// igualandolo a la función e imprimiendolo por consola.


const animalFunction = () => {
    return {miname: 'Bengal Tiger', race: 'Tiger'}
};


const {miname, race} = animalFunction();

console.log(miname); 
console.log(race); 


