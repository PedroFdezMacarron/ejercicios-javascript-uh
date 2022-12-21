// En base a la api de Breaking Bad (https://breakingbadapi.com/),
//  vamos a desarrollar una página dinámicamente en la que visualizar una galería con las imagenes 
//  y los nombres de los personajes de la serie. 
//  Para ellos es necesario usar el endpoint 'https://breakingbadapi.com/api/characters'.
// Si te fijas en la respuesta de la api, la imagen está en la propiedad 'img' y el título en la propiedad 'name'.


// NO ESTÁ LA API DISPONIBLE.  SE HACE CON LA DE RICK AND MORTY

let personajes={}

const traerUrls = async (url) =>{
    const response = await fetch(url);
    const result = await response.json();
    let array1 = result.results;
    const arrayUrls = [];
    array1.forEach(element => {
        objeto={image:element.image,name:element.name };
        arrayUrls.push(objeto);
    });
    return arrayUrls;
}

const printDatos = (arrayUrls) => {
    arrayUrls.forEach(element => {
        printPersonaje(element);
    });
}

const printPersonaje = (element) =>{
    miselec$$ = document.querySelector('#personajes');

    midiv$$ = document.createElement('div');    
    midiv$$.className = 'ficha';
        
    midiv1$$ = document.createElement('img');
    midiv1$$.src = element.image;
    midiv1$$.className = 'img';

    midiv2$$ = document.createElement('h1');
    midiv2$$.className = 'nombre';
    midiv2$$.textContent = element.name;
  
    
    midiv$$.appendChild(midiv1$$);
    midiv$$.appendChild(midiv2$$);

    miselec$$.appendChild(midiv$$);
}

const init = async () =>{
    const urlApi='https://rickandmortyapi.com/api/character';
    const arrayUrls = await traerUrls(urlApi);
    console.log(arrayUrls);
    printDatos(arrayUrls);
}

init();



