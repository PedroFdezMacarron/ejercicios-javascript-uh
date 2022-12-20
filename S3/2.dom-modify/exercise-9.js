// Basandote en el siguiente html y javascript,inserta p con el texto 'Voy dentro!',
// dentro de todos los div con la clase .fn-insert-here

const posiciones$$ = document.querySelectorAll('div');
for(i=0;i<posiciones$$.length;i++){
    if(posiciones$$[i].className==='fn-insert-here'){
        const newDiv$$ = document.createElement("p");
        newDiv$$.textContent='Voy dentro!'
        posiciones$$[i].appendChild(newDiv$$)
    }    
}

// DE ESTA OTRA FORMA NO SE CONTROLA QUE SÓLO COJA DIV.
// const posiciones$$ = document.querySelectorAll('.fn-insert-here');
// for(i=0;i<posiciones$$.length;i++){
    
//         const newDiv$$ = document.createElement("p");
//         newDiv$$.textContent='Voy dentro!'
//         posiciones$$[i].appendChild(newDiv$$)
    
// }
