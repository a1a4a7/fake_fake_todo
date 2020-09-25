

let nextTodoId = 1

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

console.log('randomInt: ' + getRandomInt(101))

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    heart: getRandomInt(101),
    text: text.iinput,
    descr: text.iinput2
})

export const removeTodo = (text) => ({

    type: 'REMOVE_TODO',
    id: text.id
})