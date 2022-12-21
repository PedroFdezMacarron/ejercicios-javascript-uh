// # Español
// Usa el siguiente código como base y crea 3 funciones llamadas father, 
// confirmExample, promptExample. La función confirmExample recibirá una variable de tipo string (description)
//  que mostrará como titulo de la ventana y retornará el valor del confirm. La función promptExample 
//  hará lo mismo pero con un prompt. La función father recibirá como parámetros description, 
//  con el valor del titulo de las ventanas y una función callback (confirmExample o promptExample).

// La función father deberá ejecutar la función que reciba como callback y añadir el valor resultado que retorne la función al array userAnwsers.

// Ejecuta varias veces la función father y haz finalmente un console.log de userAnwsers


const userAnwsers = [];

const confirmValue = confirm('Soy un texto');
const propmt = prompt('Soy un texto');

function confirmExample(miDescription){

    return(confirm(miDescription));
}

function promptExample(){
    return(propmt(miPrompt));
}

function father(valor,instruccion){
    userAnwsers.push(instruccion(valor));
}

father(confirmValue,confirm);
father(propmt,prompt);

// guia de confirm y prompt
