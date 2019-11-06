'use strict';

import React from 'react';
import { render } from 'react-dom';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import App from './components/App/App';

import NotFound from './components/App/NotFound';
import Home from './components/Home/Home';
import Entries from './components/Entries/Entries';
import NewEntry from './components/NewEntry/NewEntry';

import './styles/styles.scss';

render((
    <Router>
        <App>
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/entries" component={ Entries } />
                <Route path="/newEntry" component={ NewEntry } />
                <Route component={ NotFound }/>
            </Switch>
        </App>
    </Router>
), document.getElementById('app'));
