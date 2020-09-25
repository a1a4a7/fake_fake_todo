import React from 'react'
import './AddPage.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { addTodo } from '../../actions/index';
import { useHistory } from "react-router-dom";


const AddPage = ({ dispatch }) => {
    let input;
    let input2;
    let history = useHistory();
    let actionobj = {
        iinput: '',
        iinput2: ''
    }

    return (
        <div className="App">
            <div>ADD ITEM
            <div className="title">Title:
            <input ref={node => input = node} /></div>

                <div className="des">Description: <input
                    ref={node => input2 = node} className="des_box" /></div>
            </div>
            <div className="buttonfly">
                <button>Clear</button>

                <form onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }

                    ({ ...actionobj } = { iinput: input.value, iinput2: input2.value })

                    dispatch(addTodo(actionobj))
                    // input.value = ''
                    history.push('/App')
                }}>

                    <button type="submit" >Add
                    </button>

                </form>

                
 
            
            </div>
        </div >
    )



}

// error handling

export default connect()(AddPage);

