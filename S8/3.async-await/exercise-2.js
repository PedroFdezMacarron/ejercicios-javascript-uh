// Convierte la siguiente función con un fetch utilizando async-await. Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;
// ````js

async function getCharacters () {
    const res= await fetch('https://rickandmortyapi.com/api/character')
    const characters = await res.json();
    console.log(characters);
}

getCharacters();