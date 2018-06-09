import React, {Component} from 'react';
import ReactDOM from  'react-dom';
import App from './components/App';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!'); 
}


let html = document.getElementsByTagName('html');
html.lang = 'en';

var meta=document.createElement('meta');
meta.name='viewport';
meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');

let app = document.createElement('div');
app.id = "app"

document.getElementsByTagName('head')[0].appendChild(meta);
document.querySelector('body').appendChild(app);

ReactDOM.render(<App />, document.getElementById('app'));

