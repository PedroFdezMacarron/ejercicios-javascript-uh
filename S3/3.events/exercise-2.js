const action = (infoevento) => console.log(infoevento);
   
const ac = document.querySelector("input");

ac.addEventListener("focus", ()=> action(ac.value));


