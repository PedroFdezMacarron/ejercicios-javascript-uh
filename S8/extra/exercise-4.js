let planetSelected = 0;

const getUrl = async (url) => {
  const response = await fetch(url);
  const result = await response.json();
  return result;
};

const showCharacters = async (id,filtro) => {
  let arrCharacters = await getUrl(`http://localhost:3000/characters?idPlanet=${id}`);
  planetSelected=id;

  if(filtro){
    console.log(planetSelected,filtro);
    // arrCharacters = arrCharacters.filter(character => character.name.includes(filtro))
  arrCharacters = arrCharacters.filter(
    (character) =>
      character.name.toLowerCase().includes(filtro.toLowerCase()) 
  );

  }
  


  // mostrando tanto sus imágenes .avatar como sus nombres .name.
  // crea un div para tener todos los personajes
  // cada personaje es un div

  contenedor$$ = document.querySelector('[data-function="characters"]');
  contenedor$$.innerHTML = "";

  const characters$$ = document.createElement("div");
  characters$$.className = "characters";
  contenedor$$.appendChild(characters$$);

  arrCharacters.forEach((character) => {
    const character$$ = document.createElement("div");
    character$$.className = "character";

    const midiv$$ = document.createElement("div");
    midiv$$.textContent = character.name;

    const avatar$$ = document.createElement("img");
    avatar$$.src = character.avatar;
    avatar$$.className = "imgcharacter";

    characters$$.appendChild(character$$);
    character$$.appendChild(avatar$$);
    character$$.appendChild(midiv$$);
  });
};

const showPlanetas = (arrPlanetas) => {
  contenedor$$ = document.querySelector('[data-function="planets"]');
  arrPlanetas.forEach((planeta) => {
    const miDiv$$ = document.createElement("img");
    miDiv$$.src = planeta.image;
    miDiv$$.className = "imgplanet";
    miDiv$$.onclick = () => showCharacters(planeta.id);
    contenedor$$.appendChild(miDiv$$);
  });
};


const showInput = () => {
  contenedor$$ = document.querySelector('[data-function="search"]');
  padrediv$$ = document.createElement("label");
  padrediv$$.textContent = "Filtrar";
  midiv$$ = document.createElement("input");
  midiv$$.type = "text";
  midiv$$.addEventListener("input", () => showCharacters(planetSelected,midiv$$.value));
  padrediv$$.appendChild(midiv$$);
  contenedor$$.appendChild(padrediv$$);
};



const main = async () => {
  let arrPlanetas = await getUrl("http://localhost:3000/planets");  
  showPlanetas(arrPlanetas);
  showInput();
};

main();
