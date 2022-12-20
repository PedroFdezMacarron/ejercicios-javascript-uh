// En base al siguiente javascript, crea variables en base a las propiedades del objeto usando object destructuring
// e imprimelas por consola. Cuidado, no hace falta hacer destructuring del array, solo del objeto.

const miJuego = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

let {
    v1,
    gender,
    year,
  } = miJuego;
  console.log('destructuring',v1, gender ,year);
