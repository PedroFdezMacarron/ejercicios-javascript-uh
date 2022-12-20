// Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .
// name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.

const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'amanda'}];

// const newUsers = users.map( (elemento) => {
//     if (elemento.name[0].toLocaleLowerCase() ==='a'){
//         elemento.name="Anacleto";
//     }
//     return elemento; 
// });

try {
    const miFuncion = (elemento) => {
    if (elemento.name[0].toLocaleLowerCase() ==='a'){
        elemento.name="Anacleto";
    }
    return elemento; 
}

const newUsers = users.map(miFuncion);
console.log(newUsers);

} catch (error) {
    console.log("error")
}

