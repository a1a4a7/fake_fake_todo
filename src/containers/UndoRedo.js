import React from 'react'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'

let UndoRedo = ({ canUndo, onUndo }) => (
    <p>
        <button onClick={onUndo} disabled={!canUndo}>
            Undo
    </button>

    </p>
)

const mapStateToProps = (state) => ({
    canUndo: state.todos.past.length > 0,
})

const mapDispatchToProps = ({
    onUndo: UndoActionCreators.undo,
})

UndoRedo = connect(
    mapStateToProps,
    mapDispatchToProps
)(UndoRedo)

export default UndoRedo
