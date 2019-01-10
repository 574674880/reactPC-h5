import React, { Component } from 'react';
import './index.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Index from './components/index'
import Contact from './components/contact'
import Question from './components/question';
import Feedback from './components/feedback';
class App extends Component {
  constructor(porps) {
    super(porps)
    this.state ={

    }
  }
  render() {
    // const Route = require('react-router-dom').Route
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/question" component={Question} />
          <Route exact path="/feedback" component={Feedback}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
