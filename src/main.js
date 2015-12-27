"use strict";
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Header from './components/common/Header';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

import Routes from './routes'
import createBrowserHistory from 'history/lib/createBrowserHistory';

const AppRoot = document.getElementById('App');

ReactDOM.render(
    <div>
        <Router history={createBrowserHistory()}>
          {Routes}
        </Router>
    </div>
    ,AppRoot);
