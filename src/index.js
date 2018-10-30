import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import playlistApp from './redux/reducers'
import thunk from 'redux-thunk';
import {loadState, saveState} from './redux/localstorage.js'




const store = createStore(
    playlistApp,
    loadState(),
    applyMiddleware(thunk)    
);

store.subscribe(() => {
    saveState(store.getState());
  });

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

