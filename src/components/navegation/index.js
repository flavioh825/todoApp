import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import TabNavegation from './TabNavigation';

export default class Navigation extends Component {
  render() {
    return(
      <Provider store={store}>
        <TabNavegation />
      </Provider>
    );
  }
}
