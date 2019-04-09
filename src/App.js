import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './Store';

import { Grommet } from 'grommet';
import history from './history';
import Home from './pages/Home';
import Login from './pages/Login';

class App extends Component {
  render() {
    const theme = {
      global: {
        colors: {
          brand: '#228BE6'
        },
        font: {
          family: 'Roboto',
          size: '14px',
          height: '20px'
        }
      }
    };

    return (
      <Provider store={store}>
        <Router history={history}>
          <Grommet theme={theme}>
            <Switch>
              <Route path="/login" component={Login} />
              <Route exact path="/" component={Home} />
            </Switch>
          </Grommet>
        </Router>
      </Provider>
    );
  }
}

export default App;
