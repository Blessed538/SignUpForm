import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Storage from './components/storage';
import Home from './components/Home';
import Form from './components/Form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/storage" component={Storage} />
            <Route exact path="/form" component={Form} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
