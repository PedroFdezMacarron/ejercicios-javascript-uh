const getUrl = async (url) => {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  };
  
const main = async () => {
    // define el array de urls de imagen de gatos
    const cats=[];    

    // crea los div y el botón call a cat
    midiv$$ = document.createElement('div');
    mibtn$$  = document.createElement('button');
    mibtn$$.textContent=`Call a cat`;    
    miGallery$$ = document.createElement('div');
    miGallery$$.className='b-gallery';
    miGallery$$.id='gallery';
    midiv$$.appendChild(mibtn$$);
    let contenedor$$ = document.querySelector('body');
    contenedor$$.appendChild(midiv$$);
    contenedor$$.appendChild(miGallery$$);

    // define un objeto para pasar parámetros
    let miObjeto = {
        url:'https://api.thecatapi.com/v1/images/search',
        contenedor:miGallery$$,
        array:cats
    }
    console.log(miObjeto);
    // pasa el objeto con el div dónde añadir la imagen y el array
    mibtn$$.addEventListener('click',()=>addCat(miObjeto));
    // let cats = await getUrl('https://api.thecatapi.com/v1/images/search');   
};

const addCat = async (miObjeto)=>{
    const {url,array} = miObjeto;    
    let result = await getUrl(url);
    array.push(result[0].url);    
    // let x = await cats.push(result[0].url);
    showCats(miObjeto);
}

const showCats=(miObjeto)=>{
    const {contenedor,array} = miObjeto;
    contenedor.innerHTML='';
    for (let index = 0; index < array.length; index++) {        
        const catImg = array[index];
        miItem$$ = document.createElement('div');
        miItem$$.className = 'b-gallery__item';        
        miImg$$ = document.createElement('img');
        miImg$$.src = catImg;        
        miBtnEliminar = document.createElement('button');
        miBtnEliminar.textContent='↑ eliminar ↑';
        miBtnEliminar.addEventListener('click',()=>eliminar(miObjeto,index));
        miItem$$.appendChild(miImg$$);
        miItem$$.appendChild(miBtnEliminar);
        miObjeto.contenedor.appendChild(miItem$$);
    }
}

const eliminar=(miObjeto,index)=>{
    const {array} = miObjeto;
    array.splice(index,1);
    showCats(miObjeto);  
}

main();
