// const element$$ = document.querySelector('body')
// element$$.innerHTML = '<p>Soy dinámico!</p>';


// OTRA FORMA DE HACERLO 

const element$$ = document.querySelector('body')
const midDiv$$ = document.createElement("p")
midDiv$$.textContent="Soy dinámico!"
element$$.appendChild(midDiv$$);