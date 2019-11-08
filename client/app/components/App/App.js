'use strict';

import React, { Component } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const App = ({ children }) => (
    <>
        <CssBaseline />
        <Header />

        <Container maxWidth={ false }>
            { children }
        </Container>

        { /*<Footer />*/ }
    </>
);

export default App;
