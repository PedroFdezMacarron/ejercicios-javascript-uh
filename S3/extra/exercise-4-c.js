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
    newDiv$$.id="div"+(i+1);
    // creamos los h4 y img
    const newH4$$ = document.createElement("h4");
    const newImg$$ = document.createElement("img");
    // creamos los botones.
    const newBtn$$ = document.createElement("button");
    // asignamos valores
    newH4$$.textContent=countries[i].title;    
    newImg$$.src=countries[i].imgUrl;
    newBtn$$.textContent="Elimina imagen Nº"+(i+1)
    newBtn$$.id="btn"+(i+1);     
    // añadimos al div    
    newDiv$$.appendChild(newBtn$$);
    newDiv$$.appendChild(newH4$$);
    newDiv$$.appendChild(newImg$$);
    
    // añadimos al body
    document.body.appendChild(newDiv$$);
}

const elimina = (elemento) => {
    console.log(elemento);
    const ultimo$$ = document.getElementById("div"+elemento);
    document.body.removeChild(ultimo$$);    
}

// recorremos el array para asignar a cada botón una llamada a la función eliminar
// en el parámetro pasamos el nº a eliminar.  está hecho para números del 1 al 9.  para un número mayor de botones hay que controlarlo.
let j=1;
for(j=0; j < countries.length; j++){
    k=j+1;
    const xbtn = document.getElementById('btn'+k);
    xbtn.onclick =()=>elimina(xbtn.id.substring(3,4));
}








