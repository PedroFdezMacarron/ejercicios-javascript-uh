let todoList = [];

const traerTodo = async (url) =>{
    const response = await fetch(url);
    const result = await response.json();    
    return result;
}


const init = async () =>{
    const urlApi='http://localhost:3000/diary';
    todoList = await traerTodo(urlApi);
    console.log(todoList);  
    loadContent();  
    document.querySelector('#add_button').onclick = addPerson;
}

init();


  const printPerson = (todoList, index) => {

    // añadir info de persona
    const contentDiv = document.querySelector('#content');
    const padreDiv = document.createElement("div");    
    padreDiv.className = 'padre';
    contentDiv.appendChild(padreDiv);
    const personDiv = document.createElement("div");   
    const buttonPerson = document.createElement('button');

    padreDiv.appendChild(buttonPerson);
    padreDiv.appendChild(personDiv);

    buttonPerson.textContent = "Eliminar->";
    buttonPerson.onclick = () => deletePerson(index);
    buttonPerson.className = 'boton';
    
    personDiv.className = 'person';
    personDiv.innerHTML = `<div class="col1">${todoList?.id || '-'}</div><div class="col2">${todoList?.date || '-'}</div><div class="col3">${todoList?.title || '-'}</div>
    <div class="col4">${todoList.description}</div>`;

  }

  const loadContent = () => {
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = '<div class="person header"><div class="col0">ID</div><div class="col2">Date</div><div class="col3">Title</div><div class="col4">Description</div></div>';
    todoList.forEach((element, index) => printPerson(element, index));
  }

  const addPerson = () => {
    const name = document.querySelector('#form_name').value;
    const role = document.querySelector('#form_role').value;
    const age = document.querySelector('#form_age').value;
    personList.push({
      name,
      role,
      age,
    });
    printPerson(personList[personList.length - 1], (personList.length - 1));
    clearForm();
  };

  const clearForm = () =>{
    document.querySelector('#form_name').value='';
    document.querySelector('#form_role').value='';
    document.querySelector('#form_age').value=undefined;
  }

  const deletePerson = (index) => {
    todoList.splice(index, 1);   
    loadContent();
  }





