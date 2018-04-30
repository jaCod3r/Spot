import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/landing';
import Vade from './components/vade';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Landing} />
          <Route path="dazzling-bell-befcc6.netlify.com/vade" component={Vade} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
