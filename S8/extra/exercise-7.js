function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

const getUrl = async (url) => {
  const response = await fetch(url);
  const result = await response.json();
  return result;
};

const main = async () => {
  let arena = [];
  let characters = await getUrl("http://localhost:3000/characters");
  showGuerreros(characters, arena);

  const contenedor$$ = document.getElementById('botones');

  // crea el boton luchar y deja invisible
  let midiv$$ = document.createElement("button");
  midiv$$.textContent = "LUCHAR";
  midiv$$.className = "boton invisible";
  midiv$$.id = "luchar";
  midiv$$.addEventListener("click", () => luchar(arena));

  // crea el boton reset y deja invisible
  let midiv2$$ = document.createElement("button");
  midiv2$$.textContent = "RESET";
  midiv2$$.className = "boton invisible";
  midiv2$$.id = "reset";
  midiv2$$.addEventListener("click", () => reset(arena));

  // añade botones al contenedor
  contenedor$$.appendChild(midiv$$);
  contenedor$$.appendChild(midiv2$$);

  // coge el botón para añadir nuevop guerrero
  mibtn = document.getElementById("crear");
  mibtn.addEventListener("click", (event) => crear(characters.length + 1,event));

  // carga datos por defecto
  document.getElementById("name").value = "Mago";
  document.getElementById("avatar").value =
    "https://upload.wikimedia.org/wikipedia/commons/e/ea/GANDALF.jpg";
  document.getElementById("critic").value = 12;
  document.getElementById("defense").value = 10;
  document.getElementById("vitality").value = 300;
  document.getElementById("damage").value = '6d6,2d10,1d20';
};

const crear = async (newId,event) => {
  event.preventDefault();  

  // midiv=document.querySelectorAll('formulario');
  let vname = document.getElementById("name").value;
  let vavatar = document.getElementById("avatar").value;
  let vcritic = document.getElementById("critic").value;
  let vdefense = document.getElementById("defense").value;
  let vvitality = document.getElementById("vitality").value;
  let vdamage = document.getElementById("damage").value.split(',');  

  const guerrero = {
    id: newId,
    name: vname,
    avatar: vavatar,
    critic: vcritic,
    defense: vdefense,
    vitality: vvitality,
    damage: vdamage,
  };

  const othePram = {
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
    body: guerrero,
    method: "POST",
  };

  postData("http://localhost:3000/characters", guerrero).then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });

};

// Example POST method implementation:
const postData=async(url = "", data = {})=> {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

const reset = (arena) => {
  // borra el contenido del array arena.
  arena=[];
  showArena(arena);
  // quita visibilidad
  document.getElementById("reset").className = "boton invisible";
  document.getElementById("luchar").className = "boton invisible";
};

const jugar = (guerrero1) => {
  console.log("jugada retrasada");
  let tiradaGuerrero1 = 0;
  guerrero1.damage.forEach((element) => {
    let jugada = element.split("d"); // crea un array de dos elementos con el numero de tiradas y el numero de caras del dado
    let veces = jugada[0];
    let caras = jugada[1];
    console.log("veces", veces, "caras", caras);
    for (let index = 0; index < veces; index++) {
      let incremento = Math.floor(Math.random() * caras) + 1;
      incremento === guerrero1.critic ? (incremento *= 2) : incremento;
      //  console.log('incremento',incremento);
      tiradaGuerrero1 += incremento;
      // console.log('acumulado',tiradaGuerrero1);
    }
  });
  return tiradaGuerrero1;
};

// función que se llama recursiva hasta que hay un ganador
const luchar = async (arena) => {
  // quita visibilidad
  document.getElementById("luchar").className = "boton invisible";

  console.log("luchar");
  const guerrero1 = arena[0];
  const guerrero2 = arena[1];
  let hayGanador = false;
  // juega guerrero 1
  let tirada = jugar(guerrero1);
  guerrero2.vitality -= tirada - guerrero2.defense;
  if (guerrero2.vitality <= 0) {
    hayGanador = true;
  }
  if (!hayGanador) {
    // juega guerrero 2
    let tirada = jugar(guerrero2);
    guerrero1.vitality -= tirada - guerrero1.defense;
    if (guerrero1.vitality <= 0) {
      hayGanador = true;
    }
  }

  // bucle con rondas hasta que tengamos un ganador.
  if (!hayGanador) {
    showArena(arena);
    setTimeout(() => luchar(arena), 1000);
  }
  
  if (hayGanador) {
    // cambia visibilidad
    document.getElementById("reset").className = "boton visible";    
    showArena(arena);
  }
};

// selecciona guerrero para luchar
const selectWarrior = (index, characters, arena) => {
  console.log(arena);
  console.log(characters);
  if (arena.length === 1) {
    if (arena[0].name === characters[index].name) {
      arena.pop();
      showArena(arena);
      return;
    }
  }
  if (arena.length < 2) {
    const warrior = { ...characters[index] };
    console.log(warrior);
    arena.push(warrior);
    // warrior.vitality=9999;
    console.log("caracters", characters[index]);
    showArena(arena);
  }
  if (arena.length === 2) {
    document.getElementById("luchar").className = "boton visible";
    // ordena array arena de forma aleatoria
    arena = shuffle(arena);
  }
};

const showArena = (arena) => {
  const contenedor$$ = document.querySelector('[data-function="arena"]');
  contenedor$$.innerHTML = "";
  contenedor$$.className = "arena";
  for (let j = 0; j < arena.length; j++) {
    let character = arena[j];
    let midiv$$ = document.createElement("div");
    midiv$$.id = j;
    contenedor$$.appendChild(midiv$$); // añadimos la carta al contenedor
    // la clase depende de la vitalidad. para mostrar al perdedor
    midiv$$.className = "c-characters__item";
    if (character.vitality <= 0) {
      midiv$$.className = "c-characters__looser";
    }
    miname$$ = document.createElement("div");
    miname$$.textContent = character.name;
    miimg$$ = document.createElement("img");
    miimg$$.className = "img";
    miimg$$.src = character.avatar;
    mistats$$ = document.createElement("div");
    mistats$$.className = "stats";
    mistats$$.innerHTML = `<div>critic:${character.critic}</div><div>defense:${character.defense}</div><div>vitality:${character.vitality}</div>`;
    midiv$$.appendChild(miimg$$);
    midiv$$.appendChild(miname$$);
    midiv$$.appendChild(mistats$$);
  }
};

const showGuerreros = (characters, arena) => {
  const contenedor$$ = document.querySelector('[data-function="characters"]');
  for (let j = 0; j < characters.length; j++) {
    const character = characters[j];
    let midiv$$ = document.createElement("div");
    midiv$$.onclick = () => selectWarrior(j, characters, arena);
    contenedor$$.appendChild(midiv$$); // añadimos la carta al contenedor
    midiv$$.className = "c-characters__item";
    miname$$ = document.createElement("div");
    miname$$.textContent = character.name;
    miimg$$ = document.createElement("img");
    miimg$$.className = "img";
    miimg$$.src = character.avatar;
    mistats$$ = document.createElement("div");
    mistats$$.className = "stats";
    mistats$$.innerHTML = `<div>critic:${character.critic}</div><div>defense:${character.defense}</div><div>vitality:${character.vitality}</div>`;
    midiv$$.appendChild(miimg$$);
    midiv$$.appendChild(miname$$);
    midiv$$.appendChild(mistats$$);
  }
};

main();
