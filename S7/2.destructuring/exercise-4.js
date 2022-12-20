// En base al siguiente javascript, usa destructuring para crear las variables name y itv 
// con sus respectivos valores. Posteriormente crea 3 variables usando igualmente el destructuring
//  para cada uno de los años y comprueba que todo esta bien imprimiendolo.

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

let {
    name,
    itv,    
  } = car;

  let [
    a1,
    a2,
    a3,
   ] = itv;

     
  console.log('destructuring',name, a1,a2,a3);