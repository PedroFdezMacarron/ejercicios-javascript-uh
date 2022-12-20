// Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name
//  y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.

const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];

nuevaLista=[]

for (const city of cities) {
    let nuevoElemento=city;
    if (city.isVisited){
        nuevoElemento.Visitado=city.name;
    }
    nuevaLista.push(nuevoElemento);    
}

console.log(nuevaLista);