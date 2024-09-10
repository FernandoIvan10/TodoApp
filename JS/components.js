// Función que regresa un div que contiene un Input y un botón para agregar tareas

export function createInput(placeholder, lbl){
    const div = document.createElement('div')
    const input = document.createElement('input')
    const button = document.createElement('button')

    input.id='addTaskInput'
    input.placeholder=placeholder

    button.id='addTaskButton'
    button.innerHTML = lbl
    button.type = 'button'

    div.appendChild(input)
    div.appendChild(button)
    return div
}

// Función que regresa un div que contiene una lista desordenada
export function createList(){
    const div = document.createElement('div')
    const ul = document.createElement('ul')

    ul.id="to-doList"

    div.appendChild(ul)
    return div
}