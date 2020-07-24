import React from 'react'
import ReactDom from 'react-dom'
//https://getbootstrap.com/docs/4.4/getting-started/webpack/#importing-compiled-css to import bootstrap js

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';

import App from './components/app'

ReactDom.render(<App />, document.getElementById("root"))