// En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno de los p 
// que hayas insertado y que si el usuario hace click en este botón eliminemos el parrafo asociado.

const baseUrl = 'https://api.nationalize.io?name='
const miTexto = document.querySelector('input');
const miBoton = document.querySelector('button');
let contador=0;  // contador para incrementar

// llamada al fetch
const traerDatos=() =>{    
    fetch(baseUrl+miTexto.value)
    .then((response) => {
        return response.json();
      })
      .then((myJson) => {              
        contador++;
        generaP(myJson,contador);
      });    
}

// al pulsar boton asignamos la llamada al fetch
miBoton.onclick = () => {
    traerDatos();
}


// creamos en el body un elemento tipo P
const generaP = (datosJson,contador) => {   
    const miDiv$$ = document.createElement('div');
    miDiv$$.textContent=`El nombre ${miTexto.value}`;
    // recorrer el bucle de estadísticas
    for(let i=0;i<datosJson.country.length;i++){        
        const miP$$ = document.createElement('p');
        miP$$.id='p'+i;
        let ratio = (datosJson.country[i].probability*100).toFixed(2);
        miP$$.textContent = ` tiene un ${ratio} porciento de ser de ${datosJson.country[i].country_id} `;
        const miBtn$$ = document.createElement('button');        
        miBtn$$.textContent='x';
        miBtn$$.addEventListener('click',(event)=>remover(i));       
        miP$$.appendChild(miBtn$$);
        document.body.appendChild(miP$$);  // añade al body el P
    }  
}

// para quitar un párrafo enviamos la posición que es el id del párrafo
const remover=(pos) =>{
    console.log('quitar',pos);
    const miP$$ = document.getElementById('p'+pos);  // localiza el P a quitar por el id
    miP$$.remove();
}

