// Se crea el Array de tareas
let tasks = []

// Función que devuelve el Array de tareas
export function getData(){
    return tasks
}

// Función que añade una tarea al Array de tareas
export function addTaskToList(value){
    if(tasks.indexOf(value,0)===(-1)){
        tasks.push(value)
    }else{
        alert('No ingreses tareas repetidas')
    }
}

//Función que elimina una tarea del Array de tareas
export function deleteTaskFromList(value){
    const position = tasks.indexOf(value,0)
    tasks.splice(position,1)
}

//Función que edita una tarea del Array de tareas
export function editTaskFromList(firstValue,updateValue){
    if(tasks.indexOf(updateValue,0)===(-1)){
        const position = tasks.indexOf(firstValue,0)
        tasks[position]=updateValue
    }else{
        alert('No ingreses tareas repetidas')
    }
}