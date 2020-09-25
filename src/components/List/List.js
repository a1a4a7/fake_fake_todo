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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function SimpleList(todo) {

  console.log("print@SimpleList " + JSON.stringify(todo.todo.text))
  // console.log("print@SimpleList " + typeof todo)

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">

        <ListItem button>
          <ListItemText primary={todo.todo.id} />
          <ListItemText primary={todo.todo.text} />
          <ListItemText primary={todo.todo.heart} />

          <button className="bbb">
            <FavoriteIcon />
          </button>

          <button className="abc">
            <CloseIcon />
          </button>

        </ListItem>

      </List>
      <Divider />

    </div >
  );
}