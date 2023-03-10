
// FUNCIÓN QUE DISPARA
// usando el evento clilck del tablero
const shot = (event, objParam) => {
  // carga en array coordenadas usando el id del elemento del DOM
  let coordenadas = event.target.id.split(",");
  // destructuring
  let {rows,cols,imgChestUrl,imgSkullUrl,imgXUrl,randomRow,randomCol,marcador} = objParam;
  
  // si hace click fuera de una imagen válida cancela
  if(!event.target.src.includes('x.png')){  
    return
  }

  // incrementa contador
  console.log(marcador.textContent);
  marcador.textContent++;

  // si la posición es tesoro muestra img del tesoro
  if (
    objParam.randomRow == coordenadas[0] &&
    objParam.randomCol == coordenadas[1]
  ) {
    // tesoro encontrado
    event.target.src = imgChestUrl;
    marcador.textContent = `TESORO ENCONTRADO CON: ${marcador.textContent} INTENTOS`;
  } else {
    // muestra calavera    
    event.target.src = imgSkullUrl;
  }
};

// FUNCIÓN QUE PINTA EL TABLERO
const showBoard = (objParam) => {
  // destructuring
  let {rows,cols,imgChestUrl,imgSkullUrl,imgXUrl,randomRow,randomCol,marcador} = objParam;
  
  // limpiamos tablero
  let contenedor$$ = document.querySelector('[data-function="board"]');
  contenedor$$.innerHTML = "";  

  // recorremos el array
  for (let row = 0; row < rows; row++) {
    miRow$$ = document.createElement("tr");
    for (let col = 0; col < cols; col++) {
      miCol$$ = document.createElement("td");
      miCol$$.className = "card";
      miImg$$ = document.createElement("img");
      miImg$$.id = row + "," + col;
      miImg$$.src = objParam.imgXUrl;
      miCol$$.appendChild(miImg$$);
      miRow$$.appendChild(miCol$$);
    }
    contenedor$$.appendChild(miRow$$);
  }
};

const reset = (objParam) => {  
  objParam.rows = parseInt(prompt("¿filas?", "2"));
  objParam.cols = parseInt(prompt("¿columnas?", "2"));  
  objParam.marcador.textContent = '0';
  objParam.randomRow = Math.floor(Math.random() * (objParam.rows));
  objParam.randomCol = Math.floor(Math.random() * (objParam.cols));  
  showBoard(objParam);
};

const main = () => {
  // imagenes
  const imgXUrl = "./public/exercise-4/x.png";
  const imgChestUrl = "./public/exercise-4/chest.png";
  const imgSkullUrl = "./public/exercise-4/skull.png";

  // pedimos filas y columnas
  let rows = parseInt(prompt("¿filas?", "2"));
  let cols = parseInt(prompt("¿columnas?", "2"));

    // marcador
  let marcador = document.querySelector('[data-function="attempts"]');

  // ramdom del tesoro
  let randomRow = Math.floor(Math.random() * (rows));
  let randomCol = Math.floor(Math.random() * (cols));

  // definimos objeto para pasar parámetros
  const objParam = {
    rows,
    cols,  
    imgChestUrl,
    imgSkullUrl,
    imgXUrl,
    randomRow,
    randomCol,
    marcador,
  };

  // creamos un botón de reset
  mibtn$$ = document.createElement("button");
  mibtn$$.textContent = "reset";
  mibtn$$.addEventListener("click", () => reset(objParam));
  document.querySelector("body").appendChild(mibtn$$);

  // asignamos evento al click en el tablero
  let contenedor$$ = document.querySelector('[data-function="board"]');  
  contenedor$$.addEventListener("click", (event) => shot(event, objParam));

  // pintamos tablero
  showBoard(objParam);
};

main();
