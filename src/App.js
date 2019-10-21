import React, { Component } from 'react';
import { Route, Router } from "react-router-dom";
import Photos from './components/Photos/Photos';
import history from './history';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Route exact path="/" component={Photos} />
        </Router>
      </div>
    );
  }
}

export default App;
