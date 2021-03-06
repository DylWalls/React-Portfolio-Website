import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
        <Route path='/' exact/>
      </Switch>
      </Router>
    </>
  );
}

export default App;
