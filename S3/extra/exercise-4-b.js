const countries = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
  ];
  
// Dado el siguiente array de objetos. Crea dinamicamente en el html una lista de div 
// que contenga un elemento h4 para el titulo y otro elemento img para la imagen. 

// recorremos el array y vamos añadiendo elementos tipo div
// cada div tiene dentro un elemento h4 y otro img que añadimos con appendChild
  
for(i=0;i<countries.length;i++){
    // creamos el div
    const newDiv$$ = document.createElement("div");
    // creamos los h4 y img
    const newH4$$ = document.createElement("h4");
    const newImg$$ = document.createElement("img");
    // asignamos valores
    newH4$$.textContent=countries[i].title;
    newImg$$.src=countries[i].imgUrl;
    // añadimos al div
    newDiv$$.appendChild(newH4$$);
    newDiv$$.appendChild(newImg$$);
    // añadimos al body
    document.body.appendChild(newDiv$$);
}

// esta función carga todos los div en un array y elimina el último qu ees .length - 1 
const eliminaUltimo = () => {
    const ultimo$$ = document.querySelectorAll("div")
    document.body.removeChild(ultimo$$[ultimo$$.length-1]);    
  }

  // definimos el botón y la función a la que llama al hacer clic
const btn1 = document.querySelector('button');
btn1.onclick = eliminaUltimo;