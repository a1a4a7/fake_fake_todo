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
        
        default:
            return state
    }
}

const undoableTodos = undoable(todoss)

export default undoableTodos;