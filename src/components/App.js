import React from 'react';
import './App.css';
import Reminders from './Reminders/Reminders';
import Nav from './Nav/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="mw8 center">
        <Nav />
        <Route component={Reminders} />
      </div>
    </Router>
  );
}

export default App;
