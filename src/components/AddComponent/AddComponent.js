import React from 'react';
import './AddComponent.css';
import AddModal from '../Modals/AddModal/AddModal';
import UpdateModal from '../Modals/UpdateModal/UpdateModal'
import SimpleList from '../List/List'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'


const AddComponent = ({ todos }) => {

    return (
        <div className="AddComponent">
            <span>I'am AddComponent</span>
            <div className="anAddbutton">
                <Link to='/'>Add an Item</Link>

            </div>
            <div>
                <ul>
                    {todos.present.map(todo =>
                        <UpdateModal
                            key={todo[0].id}
                            todo={todo[0]}
                        // onClick={() => toggleTodo(todo.id)}
                        />

                    )}
                </ul>


            </div>
        </div>
    );
}


const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    // toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps,
    mapDispatchToProps)(AddComponent);
