import React, { Component } from 'react';
import { Route, Router } from "react-router-dom";
import Photos from './components/Photos/Photos';
import history from './history';
import { Provider } from "react-redux";
import configureStore from "./appRedux/store";
export const store = configureStore().store;
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route exact path="/" component={Photos} />
        </Router>
      </Provider>
    );
  }
}

export default App;
