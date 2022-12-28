function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

const getUrl = async (url) => {
  const response = await fetch(url);
  const result = await response.json();
  return result;
};

const main = async () => {
  // leemos eventos de los botones
  // boton iniciar juego
  const start = document.querySelector('[data-function="start-game"]');
  let arrayPreguntas = [];
  start.addEventListener("click", () => showTrivial());

  // boton ver resultado
  const checkGame = document.querySelector('[data-function="check-game"]');
  checkGame.addEventListener("click", () => showScore());
};

showTrivial = async () => {
  // toma el valor del input para recoger de la api el nº de preguntas
  let cuantas = document.querySelector(
    '[data-function="questions-number"]'
  ).value;
  let array1 = await getUrl(
    `https://opentdb.com/api.php?amount=${cuantas}&type=multiple`
  );
  // carga en arrayPreguntas la propiedad results que vienen las preguntas
  arrayPreguntas = array1.results;
  // console.log(arrayPreguntas);

  // selecciona el contenedor para pintar las preguntas y respuestas
  const contenedor = document.querySelector('[data-function="gameboard"]');
  // limpia contenjedor
  contenedor.innerHTML = "";
  // recorre el array de preguntas
  let i = 0;
  arrayPreguntas.forEach((pregunta) => {
    // console.log(pregunta.question);
    // carga un array temporal con las respuestas para pintar en pantalla
    let answers = [...pregunta.incorrect_answers, pregunta.correct_answer];
 
    // crea un div para pintar la pregunta.
    let midiv$$ = document.createElement("div");
    midiv$$.textContent = pregunta.question;
    midiv$$.id = i;

    // desordena el array para que la respuesta correcta no esté siempre al final.
    // console.log(answers);
    answers = shuffle(answers);
    // console.log(answers);
    
    // recorre el array de respuestas y las pinta
    answers.forEach((answer) => {      
      let respuesta$$ = document.createElement("div");
      respuesta$$.className = "answer";
      respuesta$$.textContent = answer;
      respuesta$$["data-function"] = i; // asigna a esta propiedad el id de la pregunta
      // añade el evento clic a cada respuesta y envía el evento como parámetro y la pregunta
      // para que añada la propiedad respuesta elegida
      // se puede añadir el evento al contenedor padre y con la propagación de eventos controlarlo en los hijos
      respuesta$$.addEventListener("click", () => mark(event));
      midiv$$.appendChild(respuesta$$);
    });
    contenedor.appendChild(midiv$$);
    i++;
  });
};

// función para marcar la respuesta elegida
const mark = (event) => {
  // quitar la marca a todos
  let midiv = document.getElementById(event.target["data-function"]);
  for (let node of midiv.childNodes) {
    // console.log(node); // enseña todos los nodos de la colección
    node.className = "answer";
  }

  // poner la marca
  index = parseInt(event.target["data-function"]);
  // console.log(index);
  event.target.classList.toggle("marked");
  // añade al array la propiedad con la respuesta marcada o la actualiza
  arrayPreguntas[index].respuesta = event.target.textContent;
  // console.log(arrayPreguntas);
};

// función que calcula puntuación. recibe el array de preguntas.
const showScore = () => {
  let yourScore = 0;
  arrayPreguntas.forEach((pregunta) => {
    // console.log(pregunta.respuesta,pregunta.correct_answer);
    if (pregunta.respuesta === pregunta.correct_answer) {
      yourScore++;
    }
  });
  alert("your score is:" + yourScore);
};

main();
