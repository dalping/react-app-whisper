import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import { Container } from './assets/style';
import { NavBar } from './layouts/NavBar/NavBar';

function App() {
  return (
    <Container>
      <NavBar />
      <Switch>
        <Route path="/*" component={MainPage} />
      </Switch>
    </Container>
  );
}

export default App;
