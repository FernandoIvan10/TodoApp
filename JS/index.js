// Se importan funciones de otros JS
import {createInput,createList} from './components.js'
import { addTaskToList, getData, deleteTaskFromList } from './ArrayTaskManager.js'

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
        data.forEach(element =>{
            const li = document.createElement('li')
            const button = document.createElement('button')

            li.innerHTML = element

            button.innerHTML = 'Delete'
            button.setAttribute('class','deleteButton')

            li.append(button)
            list.append(li)
        })

        const deleteButtons = document.querySelectorAll('.deleteButton')

        deleteButtons.forEach(button=>{
        button.addEventListener('click',function(){
            // Enviamos el li del botón
            deleteTask(button.closest('li'))
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
    deleteTaskFromList(liElement.firstChild.textContent)
    updateList()
}

// Se crea el botón para añadir tareas
const addButton = document.getElementById('addTaskButton')
// Se le asigna el método addTask al botón
addButton.addEventListener('click',addTask)
