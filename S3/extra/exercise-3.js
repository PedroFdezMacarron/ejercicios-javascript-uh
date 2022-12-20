const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

// seleccionamos el nodo
const elements = document.querySelector('[data-function="printHere"]');
// creamos un elemento tipo ul
const newUl$$ = document.createElement("ul");

// recorremos el array y vamos añadiendo elementos tipo li
// asignando el contenido con cada elemento del array

for(i=0;i<cars.length;i++){
    const newLi$$ = document.createElement("li");
    newLi$$.textContent=cars[i];
    newUl$$.appendChild(newLi$$);
}

// añadimos el nodo ul al div seleccionado al inicio
elements.appendChild(newUl$$);