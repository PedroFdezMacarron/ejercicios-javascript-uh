// FUNCIÓN QUE CREA EL TABLERO
// usamdo random
const arrayBorad = (rows, cols, imgXUrl) => {
  // crear filas
  var array = new Array(rows);
  for (let i = 0; i < array.length; i++) {
    // crear columnas
    array[i] = new Array(cols);
  }
  // recorremos para asignar imagen al array.
  // cada coordenada tiene la imagen de la "X"
  for (let row = 0; row < array.length; row++) {
    for (let col = 0; col < array[row].length; col++) {
      array[row][col] = imgXUrl;
    }
  }
  return array;
};

// FUNCIÓN QUE DISPARA
// usando el evento clilck del tablero
const shot = (event, objParam) => {
  // carga en array coordenadas usando el id del elemento del DOM
  let coordenadas = event.target.id.split(",");

  // incrementa contador
  console.log(objParam.marcador.textContent);
  objParam.marcador.textContent++;

  // si la posición es tesoro muestra img del tesoro
  if (
    objParam.randomRow == coordenadas[0] &&
    objParam.randomCol == coordenadas[1]
  ) {
    // tesoro encontrado
    event.target.src = objParam.imgChestUrl;
    objParam.marcador.textContent = `TESORO ENCONTRADO CON: ${objParam.marcador.textContent} INTENTOS`;
  } else {
    // muestra calavera
    // objParam.arrayBorad[row][col] = objParam.imgSkullUrl;
    event.target.src = objParam.imgSkullUrl;
  }
};

// FUNCIÓN QUE PINTA EL TABLERO
const showBoard = (objParam) => {
  let rows = objParam.rows;
  let cols = objParam.cols;
  let board = objParam.board;

  // limpiamos tablero
  let contenedor$$ = document.querySelector('[data-function="board"]');
  contenedor$$.innerHTML = "";  

  // recorremos el array
  for (let row = 0; row < board.length; row++) {
    miRow$$ = document.createElement("tr");
    for (let col = 0; col < board[row].length; col++) {
      miCol$$ = document.createElement("td");
      miCol$$.className = "card";
      miImg$$ = document.createElement("img");
      miImg$$.id = row + "," + col;
      miImg$$.src = board[row][col];
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
  objParam.board = arrayBorad(objParam.rows, objParam.cols, objParam.imgXUrl);
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

  // definimos tablero
  let board = arrayBorad(rows, cols, imgXUrl);

  // marcador
  let marcador = document.querySelector('[data-function="attempts"]');

  // ramdom del tesoro
  let randomRow = Math.floor(Math.random() * (rows));
  let randomCol = Math.floor(Math.random() * (cols));

  // definimos objeto para pasar parámetros
  const objParam = {
    rows,
    cols,
    board,
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
