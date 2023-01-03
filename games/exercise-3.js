const questionsType = [
  {
    title: "Gender",
    key: "gender",
    questions: ["Man", "Woman"],
  },
  {
    title: "Hair Color",
    key: "hairColor",
    questions: ["Blonde", "Red", "Pink", "Brown", "White", "Black"],
  },
  {
    title: "Moustache",
    key: "moustache",
    questions: ["Yes", "No"],
  },
  {
    title: "Glasses",
    key: "glasses",
    questions: ["Yes", "No"],
  },
  {
    title: "Hat or Cap",
    key: "hatOrCap",
    questions: ["Yes", "No"],
  },
  {
    title: "Clothes color",
    key: "clothesColor",
    questions: ["Red", "Orange", "Green", "White", "Black", "Pink"],
  },
  {
    title: "Skin color",
    key: "skinColor",
    questions: ["Light", "Dark"],
  },
  {
    title: "Long Hair",
    key: "longHair",
    questions: ["Yes", "No"],
  },
];

const persons = [
  {
    img: "public/exercise-3/001-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Red",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/002-man.svg",
    gender: "Man",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/003-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Green",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/004-man.svg",
    gender: "Man",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "Yes",
    clothesColor: "Red",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/005-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "White",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/006-man.svg",
    gender: "Man",
    hairColor: "Brown",
    moustache: "Yes",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Green",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/007-man.svg",
    gender: "Man",
    hairColor: "Red",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/008-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "White",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/009-man.svg",
    gender: "Man",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/010-woman.svg",
    gender: "Woman",
    hairColor: "Brown",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Pink",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/011-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/012-woman.svg",
    gender: "Woman",
    hairColor: "Red",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/013-woman.svg",
    gender: "Woman",
    hairColor: "White",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Pink",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/014-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "White",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/015-woman.svg",
    gender: "Woman",
    hairColor: "Brown",
    moustache: "No",
    glasses: "Yes",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/016-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "Yes",
    clothesColor: "Pink",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/017-woman.svg",
    gender: "Woman",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/018-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "White",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/exercise-3/019-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Red",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/exercise-3/020-man.svg",
    gender: "Man",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/exercise-3/021-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "Yes",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/exercise-3/022-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "Yes",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/exercise-3/023-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/exercise-3/024-man.svg",
    gender: "Man",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/025-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Red",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/exercise-3/026-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Red",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/exercise-3/027-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/028-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Pink",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/029-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "White",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/030-woman.svg",
    gender: "Woman",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/exercise-3/031-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Green",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/032-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "Yes",
    hatOrCap: "No",
    clothesColor: "Pink",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/033-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/034-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Pink",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/035-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/036-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "White",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/037-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "Yes",
    clothesColor: "Red",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/038-man.svg",
    gender: "Man",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/039-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "Yes",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Green",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/040-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Red",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/041-man.svg",
    gender: "Man",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/042-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Red",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/043-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/044-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Pink",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/045-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "White",
    skinColor: "Light",
    longHair: "No",
  },
];

const showPersons = (persons, pistas, who, position) => {
  let contenedor$$ = document.querySelector('[data-function="boardGame"]');
  contenedor$$.innerHTML = "";
  console.log("muestra personas");
  // console.log(position);
  // console.log(who);

  persons.forEach((element, index) => {
    let miDiv$$ = document.createElement("img");
    miDiv$$.className = "b-board-game img";
    miDiv$$.src = element.img;
    miDiv$$.id = index;

    // control de si tiene mostrar cara del personaje
    pistas.forEach((pista) => {
      valorElegido = pista.selection;
      // console.log('valorElegido',valorElegido);
      clave = pista.key;
      // console.log('clave',clave);
      dato = who[clave];
      // console.log('dato',dato);
      // compara el valor elegido por el usuario
      // con el valor del personaje seleccionado al azar
      // si son
      if (who[clave] == valorElegido) {
        if (valorElegido !== element[clave]) {
          miDiv$$.className = "out";
        }
      } else {
        if (element[clave] === valorElegido) {
          miDiv$$.className = "out";
        }
      }
    });
    contenedor$$.appendChild(miDiv$$);
  });
};

const showQuestions = (questionsType, pistas) => {
  let contenedor$$ = document.querySelector('[data-function="questions"]');
  contenedor$$.innerHTML = "";
  questionsType.forEach((element) => {
    let miDiv$$ = document.createElement("div");
    miDiv$$.className = "b-clues";
    miDiv$$.id = element.key;
    let miDiv2$$ = document.createElement("h2");
    miDiv2$$.textContent = element.title;
    miDiv$$.appendChild(miDiv2$$);
    element.questions.forEach((option, index) => {
      miBtn$$ = document.createElement("button");
      miBtn$$.className = "questionsbutton";
      miBtn$$.textContent = option;
      miBtn$$.id = `${element.key}btn${index}`;
      miDiv$$.appendChild(miBtn$$);
    });
    contenedor$$.appendChild(miDiv$$);
  });
};

const selectPista = (event, pistas, persons, who, position) => {
  if (event.target.className === "questionsbutton") {
    // controla que no sea una pista excluyente

    // comprobar si la persona seleccionada aleatoriamente por el juego
    // coincide con la opción seleccionada por el usuario
    const key = event.target.parentElement.id;
    const selection = event.target.textContent;
    console.log(event.target.id);

    let midiv = document.getElementById(event.target.id);
    midiv.className = "questionsOut";
    // console.log('how:',who[key] , '  seleccionado',selection);

    // añade pista
    pistas.push({
      key: event.target.parentElement.id,
      selection: event.target.textContent,
    });

    // añade al contador de pistas
    const divCounter$$ = document.querySelector('[data-function="clueCount"]');
    let counter = divCounter$$.textContent;
    counter++;
    divCounter$$.textContent = counter;
  }
  showPersons(persons, pistas, who, position);
};

const iKnow = (event, pistas, persons) => {
  if (event.target.className === "b-board-game img") {
    if (event.target.id == position) {
      alert(
        "has adivinado. TARGET " + event.target.id + "  POSITION:" + position
      );
    } else {
      alert(
        "has fallado. TARGET " + event.target.id + "  POSITION:" + position
      );
    }
    reset(pistas);
    showPersons(persons, pistas, who, position);
  }
};

const reset = (pistas) => {
  const divCounter$$ = document.querySelector('[data-function="clueCount"]');
  divCounter$$.textContent = "0";
  pistas.length = 0;
  position = Math.ceil(Math.random() * (persons.length - 1));
  who = persons[position];
  showQuestions(questionsType, pistas);
};

show = (pistas) => {
  console.log(who);
  console.log(position);
  console.log(pistas);
};

let position = -1;
let who = {};

const main = async (persons, questionsType) => {
  let pistas = [];
  // selección aleatoria de la persona
  position = Math.ceil(Math.random() * (persons.length - 1));
  who = persons[position];

  // muestra personas y pistas
  showPersons(persons, pistas, who, position);
  showQuestions(questionsType, pistas);

  // añade el evento clic al div con las preguntas.
  let contenedor$$ = document.querySelector('[data-function="questions"]');
  contenedor$$.addEventListener("click", (event) =>
    selectPista(event, pistas, persons, who, position)
  );

  // añade el evento clic al div con los personajes.
  let personajes$$ = document.querySelector('[data-function="boardGame"]');
  personajes$$.addEventListener("click", (event) =>
    iKnow(event, pistas, persons)
  );

  // añade un evento al contador para validaciones
  const divCounter$$ = document.querySelector('[data-function="clueCount"]');
  divCounter$$.addEventListener("click", () => show(pistas));
};

main(persons, questionsType);
