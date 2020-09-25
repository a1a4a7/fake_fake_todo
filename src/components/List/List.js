import React from 'react';
import './List.css'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { connect } from 'react-redux'
import { addTodo, removeTodo } from '../../actions/index';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));




const SimpleList = (props) => {
  console.log("print@SimpleList " + JSON.stringify(props.todo))

  const classes = useStyles();
  return (
    <div className={classes.root} {...props}>
      <List component="nav" aria-label="main mailbox folders">

        <ListItem button>
          <ListItemText primary={props.todo.id} />
  {/*   */} 
          <ListItemText primary={props.todo.text} />
          <ListItemText primary={props.todo.heart} />
      
          <button className="bbb">
            <FavoriteIcon />
          </button>

          <button className="abc" onClick={() => removeTodo(props.todo.id)}>
            <CloseIcon />
          </button>

        </ListItem>

      </List>
      <Divider />

    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos
})
const mapDispatchToProps = dispatch => ({
  removeTodo: id => dispatch(removeTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SimpleList) 
