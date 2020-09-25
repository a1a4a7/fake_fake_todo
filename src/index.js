import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AddPage from './components/AddPage/AddPage';
import { BrowserRouter, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from './reducers/index';
import { composeWithDevTools } from "redux-devtools-extension";



const store = createStore(rootReducers, composeWithDevTools())


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <h1>I'm a TodoList-Redux</h1>
      <Route path="/" exact component={AddPage} />
      <Route path="/App" exact component={App} />



    </BrowserRouter>
  </Provider>
  ,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
