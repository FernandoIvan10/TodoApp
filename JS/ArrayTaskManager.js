// Se crea el Array de tareas
let tasks = []

// Función que devuelve el Array de tareas
export function getData(){
    return tasks
}

// Función que añade una tarea al Array de tareas
export function addTaskToList(value){
    tasks.push(value)
}