
const baseUrl = 'https://api.nationalize.io?name='
const miTexto = document.querySelector('input');
const miBoton = document.querySelector('button');

const btnClic=() =>{
    console.log("pulsado");
    fetch(baseUrl+miTexto.value)
    .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
      });
    }

miBoton.onclick = () => {
    btnClic();
}
