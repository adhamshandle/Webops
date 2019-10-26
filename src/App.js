import React, { Component } from 'react';
import { Route, Router } from "react-router-dom";
import Photos from './components/Photos/Photos';
import history from './history';
import { Provider } from "react-redux";
import configureStore from "./appRedux/store";
import PhotoView from './components/Photos/PhotoView';
export const store = configureStore().store;
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route exact path="/" component={Photos} />
          <Route exact path="/photos/:id" component={PhotoView} />
          <Route exact path="/categories/photos/:id" component={PhotoView} />
          <Route exact path="/categories/:id" component={Photos} />
        </Router>
      </Provider>
    );
  }
}

export default App;
