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
    const miP$$ = document.createElement('p');
    let textoP$$=`El nombre ${miTexto.value}`;
    // recorrer el bucle de estadísticas
    for(i=0;i<datosJson.country.length;i++){  
        let ratio = (datosJson.country[i].probability*100).toFixed(2);
        textoP$$ += ` tiene un ${ratio} porciento de ser de ${datosJson.country[i].country_id}`;
    }
    miP$$.textContent = textoP$$;  // asigna todo el texto al contenedor P
    miP$$.id=contador;  // identifica cada elemento P con un número
    document.body.appendChild(miP$$);  // añade al body el P

    // añade el botón al P
    const buttonPerson = document.createElement('button');
    buttonPerson.innerHTML = ' X ' + contador;
    buttonPerson.onclick = () => remover(contador);
    miP$$.appendChild(buttonPerson);   
}

// para quitar un párrafo enviamos la posición que es el id del párrafo
const remover=(pos) =>{
    console.log('quitar',pos);
    const miP$$ = document.getElementById(pos);  // localiza el P a quitar por el id
    miP$$.remove();
}

