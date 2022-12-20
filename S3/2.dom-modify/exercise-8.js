// Basandote en el siguiente html,inserta una p con el texto 'Voy en medio!'
//  entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

/* <body>
   <div></div>
      sdfsfds
   <div> sdsdasd </div>
</body> */

const newDiv$$ = document.createElement("p");
newDiv$$.textContent='Voy en medio!'
const posiciones$$ = document.querySelectorAll('div');
document.body.insertBefore(newDiv$$, posiciones$$[1]);








