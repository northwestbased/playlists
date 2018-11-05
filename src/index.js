import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import playlistApp from './reducers/reducers'
import thunk from 'redux-thunk';


export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  };

  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch (err) {
      // Ignore write errors.
    }
  };





const store = createStore(
    playlistApp,
    loadState(),
    applyMiddleware(thunk)    
);

store.subscribe(() => {
    saveState(store.getState());
    console.log(store.getState())
  });

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

