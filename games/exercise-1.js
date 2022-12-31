let = finish=false;
let jugada=0;
let anterior_jugada=-1;
let score = 0;
let attempts = 0;

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

let cardArray = [
    {
      id: 1,
      name: "earth",
      img: "public/exercise-1/earth.svg",
    },
    {
      id: 2,
      name: "jupiter",
      img: "public/exercise-1/jupiter.svg",
    },
    {
      id: 3,
      name: "mars",
      img: "public/exercise-1/mars.svg",
    },
    {
      id: 4,
      name: "mercury",
      img: "public/exercise-1/mercury.svg",
    },
    {
      id: 5,
      name: "saturn",
      img: "public/exercise-1/saturn.svg",
    },
    {
      id: 6,
      name: "uranus",
      img: "public/exercise-1/uranus.svg",
    },
    {
      id: 7,
      name: "earth",
      img: "public/exercise-1/earth.svg",
    },
    {
      id: 8,
      name: "jupiter",
      img: "public/exercise-1/jupiter.svg",
    },
    {
      id: 9,
      name: "mars",
      img: "public/exercise-1/mars.svg",
    },
    {
      id: 10,
      name: "mercury",
      img: "public/exercise-1/mercury.svg",
    },
    {
      id: 11,
      name: "saturn",
      img: "public/exercise-1/saturn.svg",
    },
    {
      id: 12,
      name: "uranus",
      img: "public/exercise-1/uranus.svg",
    },
  ];

// desordena el array
cardArray=shuffle(cardArray);


// amplia las propiedades del array
for (let index = 0; index < cardArray.length; index++) {
    let element = cardArray[index];
    element.selected = false;
    element.fixed = false;        
}


//   id: 1,
//   name: "earth",
//   img: "public/exercise-1/earth.svg",

const showScore=()=>{  
    const score$$ = document.querySelector('[data-function="score"]');    
    const attempts$$ = document.querySelector('[data-function="attempts"]');
    const jugada$$ = document.querySelector('[data-function="jugada"]');
    const anteriorjugada$$ = document.querySelector('[data-function="anteriorjugada"]');
    score$$.textContent=score;
    attempts$$.textContent=attempts;
    jugada$$.textContent=jugada;
    anteriorjugada$$.textContent=anterior_jugada;

}


const showCards = () =>{
    const miDiv$$ = document.querySelector('[data-function="grid"]');
    miDiv$$.innerHTML='';
    for (let index = 0; index < cardArray.length; index++) {    
        const element = cardArray[index];
        newCard = document.createElement('img');
        newCard.className='b-grid img';
        newCard.id = index;
        console.log(element.fixed);
        if(element.fixed === true){
            newCard.src = element.img;
        }else{
            newCard.src = "public/exercise-1/tick.svg";
        }
        newCard.onclick = ()=>playCard(index);
        miDiv$$.appendChild(newCard);
    }    
}

const limpia=()=>{
    console.log('limpia')
    jugada=0;
    showScore(); 
    showCards();    
}

const playCard = (index) =>{
    // control de jugadas incorrectas.    
    if(cardArray[index].fixed || cardArray[index].selected){
        alert("debes pulsar sobre una carta distinta")
        return;
    }
    jugada++;
    if(jugada>2){
        // alert("sólo se pueden jugar dos cartas");
        return;
    }
    if(jugada===2){      
        attempts++;        
        if(cardArray[index].name === cardArray[anterior_jugada].name){                 
            cardArray[index].fixed = true;
            cardArray[anterior_jugada].fixed = true;
            score++;
            anterior_jugada=-1;
            jugada=0;
            showCards();
        }else{
            const miCard$$ = document.getElementById(index);
            miCard$$.src = cardArray[index].img;      
            cardArray[index].selected = false;
            cardArray[anterior_jugada].selected = false;
            anterior_jugada=-1;          
            setTimeout(limpia, 500);  // espera 0.52 segundos.         
        }
         
    }else{
        // primera carta jugada    
        cardArray[index].selected = true;
        anterior_jugada = index;
        const miCard$$ = document.getElementById(index);
        miCard$$.src = cardArray[index].img;      
        
    }
    showScore();
}

const main = () =>{  
    showCards(cardArray);
    showScore();
}
main();