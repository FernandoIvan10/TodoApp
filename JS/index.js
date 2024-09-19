// Se importan funciones de otros JS
import {createInput,createList} from './components.js'
import { addTaskToList, getData, deleteTaskFromList, editTaskFromList } from './ArrayTaskManager.js'

//Se crea el input para que el usuario pueda agregar tareas
const input = createInput('Add Task', 'Add')
document.body.append(input)
//Se crea la lista donde se mostrarán las tareas
const ul = createList()
document.body.append(ul)

// Función que actualiza la lista HTML
function updateList(){
    // Se limpia la lista antes de agregar datos
    const oldList = document.querySelector('#to-doList')
    while(oldList.firstChild){
        oldList.removeChild(oldList.firstChild)
    }

    // Se obtienen los datos del Array de tareas
    const data = getData()

    // Se vuelve a llenar la lista con los nuevos datos
    const list = document.getElementById('to-doList')
    // Por cada elemento del Array se crea un elemento li
        data.forEach(element =>{
            // Se crean los elementos que contiene el li
            const li = document.createElement('li')
            const buttonGroup = document.createElement('div');
            const deleteButton = document.createElement('button')
            const editButton = document.createElement('button')

            // Se le asigna el texto
            li.innerHTML = element

            // Se le asigna el botón delete
            deleteButton.innerHTML = 'Delete'
            deleteButton.setAttribute('class','deleteButton')
            buttonGroup.append(deleteButton);

            // Se le asigna el botón edit
            editButton.innerHTML = 'Edit'
            editButton.setAttribute('class','editButton')
            buttonGroup.append(editButton);

            // Se le asigna una clase al div de botones
            buttonGroup.setAttribute('class', 'button-group');

            // Se agrega el grupo de botones al li
            li.append(buttonGroup);

            // Se agrega el li al ul
            list.append(li)
        })

        // Se agregan los eventListener a los botones
        const deleteButtons = document.querySelectorAll('.deleteButton')
        deleteButtons.forEach(button=>{
        button.addEventListener('click',function(){
            // Enviamos el li del botón
            deleteTask(button.closest('li'))
        })
        })
        const editButtons = document.querySelectorAll('.editButton')
        editButtons.forEach(button=>{
        button.addEventListener('click',function(){
            // Enviamos el li del botón
            editTask(button.closest('li'))
        })
        })
}

// Función que añade la tarea que el usuario ha escrito en el input
function addTask(){
    //Se obtiene el valor del input
    let inputValue = document.getElementById('addTaskInput').value
    //Se valida que el valor no esté vacío
    if(inputValue!==""){
        // Se inserta el valor en el Array de tareas
        addTaskToList(inputValue)
        // Se actualiza la lista
        updateList()
        // Se limpia el input
        document.getElementById('addTaskInput').value = ""
    }
}

// Función que elimina una tarea de la lista
function deleteTask(liElement){
    // Se elimina la tarea del Array
    deleteTaskFromList(liElement.firstChild.textContent)
    // Se actualiza la lista
    updateList()
}

// Función que te permite modificar una tarea de la lista
function editTask(liElement){
    // Se obtiene el texto del elemento seleccionado
    const firstText = liElement.firstChild.textContent
    // Se crea un input donde se podrá editar el texto
    const input = document.createElement('input')
    input.type = 'text'
    input.setAttribute('class','input')
    input.value = firstText

    // Se oculta el texto que tenía
    liElement.firstChild.textContent = ''
    
    // Se agrega el input
    liElement.insertBefore(input, liElement.firstChild)
    liElement.setAttribute('type','input')

    // Se ocultan los botones delete y edit
    const deleteButton = liElement.querySelector('.deleteButton')
    const editButton = liElement.querySelector('.editButton')
    deleteButton.style.display = 'none'
    editButton.style.display = 'none'

    // Se agrega el botón save
    const saveButton = document.createElement('button')
    saveButton.textContent='Save'
    liElement.append(saveButton)

    // Se agrega el eventListener al botón save
    saveButton.addEventListener('click',function(){
        // Se obtiene el texto del input
        const input = liElement.querySelector('.input')
        // Se modifica la tarea en el Array
        editTaskFromList(firstText,input.value)
        // Se actualiza la lista
        updateList()
    })
}

// Se crea el botón para añadir tareas
const addButton = document.getElementById('addTaskButton')
// Se le asigna el método addTask al botón
addButton.addEventListener('click',addTask)
