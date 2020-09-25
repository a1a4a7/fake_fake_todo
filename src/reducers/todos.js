import undoable from 'redux-undo'


const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            // console.log('print: ' + state)
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    descr: action.descr,
                    heart: action.heart
                }
            ]
        case 'REMOVE_TODO':
            // console.log(JSON.stringify(state.filter(id => id !== action.id)))
            return state.filter(id => id !== action.id)
        default:
            return state
    }

}


const todoss = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todos(undefined, action)
            ]
        case 'REMOVE_TODO':
            // console.log(JSON.stringify(state.filter(id => id !== action.id)))
            return [
                ...state,
                todos(undefined, action)
            ]
        default:
            return state
    }
}

const undoableTodos = undoable(todoss)

export default undoableTodos;