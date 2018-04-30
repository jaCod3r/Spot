import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './/components/landing';
import Vade from './components/vade';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Landing} />
        <Route path="/vade" component={Vade} />
      </div>
    );
  }
}

export default App;
