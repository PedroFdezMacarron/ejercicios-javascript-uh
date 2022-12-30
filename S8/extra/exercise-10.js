const getUrl = async (url) => {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  };
  
  const cargarMas = async (page) =>{
    console.log(page);
    let characters = await getUrl(`http://localhost:3000/characters?_page=${page.val}&_limit=5`);
    pinta(characters);
    page.val = page.val + 1;    
  }

  const pinta = (characters) =>{
    const galeria$$ = document.querySelector('[data-fn="characters"]');
    characters.forEach(element => {
        item$$ = document.createElement('div');
        item$$.className ='b-gallery__item';
        text$$ = document.createElement('div');
        text$$.className ='b-gallery__text';
        text$$.textContent = element.name;
        img$$  = document.createElement('img');
        img$$.className='ib-gallery__img'
        img$$.src = element.image;        
        item$$.appendChild(img$$);
        item$$.appendChild(text$$);
        galeria$$.appendChild(item$$);
    });
  }
  

// función principal
const main = async () => {
    let page = {val:1};
    // cargamos los 5 primeros
    await cargarMas(page);
    

    // creamos el botón
    miBtn$$ = document.createElement('button');
    miBtn$$.textContent = 'cargar 5 más';       
    miBtn$$.addEventListener("click", () => cargarMas(page));
    miBtn$$.className = 'b-btn';
    // añadimos a html
    const body$$ = document.querySelector('body');
    body$$.appendChild(miBtn$$);  
 };

  // llamamos a main
  main();