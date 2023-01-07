
// FUNCIÓN QUE AÑADE LA TAREA
const addTask=(evt,miObjeto)=>{    
    evt.preventDefault();    
    const txtTask = miObjeto.miTxt.value;
    // controlar que hay algo escrito
    if(txtTask!=''){
        miObjeto.contador++;
        // definimos el nuevo elemento li 
        // con un <p> y un <button>
        let newTask$$ = document.createElement('li');
        newTask$$.id = 'task'+ miObjeto.contador;

        let newP$$ = document.createElement('p');
        newP$$.textContent = txtTask;    
        
        let newBtn$$ = document.createElement('button');
        newBtn$$.textContent='X';
        newBtn$$.id = miObjeto.contador;
        newBtn$$.className='btn-delete'

        // añadimos los objetos al DOM
        newTask$$.appendChild(newP$$);
        newTask$$.appendChild(newBtn$$);
        miObjeto.contenedor$$.appendChild(newTask$$);
        // reseteamos el campo input
        miObjeto.miTxt.value='';
        miObjeto.miTxt.focus();
        // ocultamos todas las tareas realizadas
        document.querySelector('.empty').style.display = "none";;
    }       

}

// FUNCION PARA ELIMINAR TAREAS
const removeTask=(event)=>{
    // controla que damos en un botón eliminar tarea
    if(event.target.className==='btn-delete'){
        const taskId = 'task'+event.target.id;
        miTask$$ = document.getElementById(taskId);
        miTask$$.remove();        
        // si no quedan tareas muestra mensaje de que todo está terminado        
        if(document.querySelector('li')===null){
             document.querySelector('.empty').style.display = "block";
        }
    }
}


// función principal
const main=()=>{

    // contador de tareas
    let contador = 1;

    // capturamos el input.
    const miTxt = document.querySelector("input");    

    // capturamos el div dónde añadir tareas
    let contenedor$$ = document.querySelector("div.li-container ul");
    // capturamos eventos en el listado de tareas para eliminar
    contenedor$$.addEventListener('click',(event)=>removeTask(event));

    // creamos el objeto para pasar a las funciones
    const miObjeto ={miTxt,contenedor$$,contador};

    // capturamos botón añadir y asignamos evento
    const miBoton = document.querySelector(".btn-add");
    miBoton.addEventListener('click',(evt)=>addTask(evt,miObjeto));

}

main();

