import React from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

import CardList from './components/CardList';
import Header from './components/Header'
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Container
        fixed
        style={{ backgroundColor: 'white', opacity: 0.85, minHeight: '100vh' }}>
        <CardList />
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default App;
