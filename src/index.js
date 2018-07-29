import React, {Component} from 'react';
import ReactDOM from  'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

import './assets/styles/main.scss';


if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!'); 
}


// HTML stuff
let html = document.getElementsByTagName('html');
html.lang = 'en';

var meta=document.createElement('meta');
meta.name='viewport';
meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');

let app = document.createElement('div');
app.id = "app"

document.getElementsByTagName('head')[0].appendChild(meta);
document.querySelector('body').appendChild(app);



const createStoreWithMiddleware = applyMiddleware(ReduxPromise, thunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
    , document.getElementById('app'));

