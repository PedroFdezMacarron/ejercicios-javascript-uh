let yourScore=0; 

// const aJugar = (secondsLeft,divSeconds$$,miGrid)=>{
//     const promise = new Promise((resolve, reject) => {

    
//     //   setTimeout(function () {      
//     //     resolve(5);
//     //   }, 2000);
//     if(secondsLeft<0){
//         resolve(5);
//     };

//     return promise;
//   };


const aJugar = async (secondsLeft,divSeconds$$,miGrid,lastPosition)=>{        
    secondsLeft -= 1;
    divSeconds$$.textContent= secondsLeft;
    // saca un aposición aleatoria entre 0 y 8 sin repetir
    let position = Math.ceil(Math.random()*8);
    while (position===lastPosition) {
        position = Math.ceil(Math.random()*8);
        console.log(position);
    }
    lastPosition=position;
    // console.log(position);

    // pone todos tapados
    miGrid.forEach(element => {
        element.className = 'b-square';
    });
    

    // saca el mole en la posición aleatoria
    miGrid[position].classList.toggle('b-mole')

    // si queda tiempo sigue el juego
    if(secondsLeft>0){
        setTimeout(()=>aJugar(secondsLeft,divSeconds$$,miGrid,lastPosition),700);
    }else{
        document.querySelector('[data-function="score"]').textContent=yourScore;
        alert("YOUR SCORE IS:" + yourScore);
        // pone todos tapados
        miGrid.forEach(element => {
        element.className = 'b-square';
    });
    }
}

const golpe=(event)=>{
    console.log(event.target.className);
    if(event.target.className === 'b-square b-mole'){
        event.target.className = 'b-square';
        yourScore++;
        div$$ = document.querySelector('[data-function="score"]')
        div$$.textContent = yourScore;
    }  
    console.log(yourScore);
}

const main= async()=>{
   let lastPosition;
   let divSeconds$$  = document.querySelector('[data-function="time-left"]');
   let secondsLeft = divSeconds$$.textContent;   
   let miGrid=document.querySelectorAll('[data-function="square"]');
   let miDiv=document.getElementsByClassName("b-grid");      
//    console.log(miGrid);
   // añade 
   miDiv[0].addEventListener("click",(event) =>golpe(event));
   // llama a la fucnión jugar
   aJugar(secondsLeft,divSeconds$$,miGrid,lastPosition);
   
}

main();





