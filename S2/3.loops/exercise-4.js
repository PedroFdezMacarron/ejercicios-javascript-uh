// Usa un bucle forof para recorrer todos los juguetes
// y elimina los que incluyan la palabra `gato`.
// Recuerda que puedes usar la función `.includes()` para comprobarlo.

const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

let i=0;
let eliminar=[];

for (const iterator of toys) {
    
    if(iterator.name.includes('gato')){
        console.log('elimina',toys[i].name)
        eliminar.push(i);
    }
    i++;
}

for (i=eliminar.length-1 ; i >= 0 ; i--){

    toys.splice(eliminar[i],1);
    
}

console.log(toys);

