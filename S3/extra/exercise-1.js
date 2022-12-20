const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const miDiv$$ = document.querySelector("body");
const newUl$$ = document.createElement("ul");

for(i=0;i<countries.length;i++){
    const newLi$$ = document.createElement("li");
     newLi$$.textContent = countries[i]
     newUl$$.appendChild(newLi$$);
}

document.body.appendChild(newUl$$)



