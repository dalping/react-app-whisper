import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import { Container } from './assets/style';
import { NavBar } from './layouts/NavBar/NavBar';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { WritePost } from './pages/WritePost/WritePost';

function App() {
  return (
    <Container>
      <NavBar />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/write" component={WritePost} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/*" component={MainPage} />
      </Switch>
    </Container>
  );
}

export default App;
