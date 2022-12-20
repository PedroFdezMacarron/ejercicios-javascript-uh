// const miBody$$ = document.querySelector('body')
// let dinamicHtml$$="<div>";
// for(let i=1;i<=6;i++){
//     dinamicHtml$$ += '<p></p>'
// }
// dinamicHtml$$ += '</div>'
// miBody$$.innerHTML = dinamicHtml$$;



// OTRA FORMA DE HACERLO.
const currentDiv = document.querySelector('body');
var newDiv = document.createElement("div");
for(i=1;i<=6;i++){
    var newP = document.createElement("p");
    newDiv.appendChild(newP);
}

 // añade el elemento creado y su contenido al DOM
 document.body.appendChild(newDiv);

 




