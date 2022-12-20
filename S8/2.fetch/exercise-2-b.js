// En base al ejercicio anterior. Crea dinamicamente un elemento <p> 
// por cada petición a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
// EJ: El nombre Abel tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ.

const baseUrl = 'https://api.nationalize.io?name='
const miTexto = document.querySelector('input');
const miBoton = document.querySelector('button');

const btnClic=() =>{    
    fetch(baseUrl+miTexto.value)
    .then((response) => {
        return response.json();
      })
      .then((myJson) => {      
        generaP(myJson);
      });
    
}

miBoton.onclick = () => {
    console.log("pulsado");
    btnClic();
}

const generaP = (datosJson) => {
    const miP$$ = document.createElement('p');
    let textoP$$=`El nombre ${miTexto.value}`;
    for(i=0;i<datosJson.country.length;i++){
        let ratio = (datosJson.country[i].probability*100).toFixed(2);
        textoP$$ += ` tiene un ${ratio} porciento de ser de ${datosJson.country[i].country_id}`;
    }
    miP$$.textContent = textoP$$;
    document.body.appendChild(miP$$);
}
