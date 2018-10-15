import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import "./css/font-awesome.min.css"
import "./vendors/line-icon/css/simple-line-icons.css"
import "./vendors/elegant-icon/style.css"
import "./css/bootstrap.min.css"
import "./vendors/revolution/css/settings.css"
import "./vendors/revolution/css/layers.css"
import "./vendors/revolution/css/navigation.css"
import "./vendors/owl-carousel/owl.carousel.min.css"
import "./vendors/bootstrap-selector/css/bootstrap-select.min.css"
import "./vendors/jquery-ui/jquery-ui.css"
import "./css/style.css"
import "./css/responsive.css"

import App from './app'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
