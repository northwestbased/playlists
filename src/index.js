import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import playlistApp from './redux/reducers'
import thunk from 'redux-thunk';



const store = createStore(
    playlistApp,
    applyMiddleware(thunk)
);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

