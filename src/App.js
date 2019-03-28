import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Grommet } from 'grommet';
import Home from './pages/Home';
import history from './history';

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
      <Router history={history}>
        <Grommet theme={theme}>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Grommet>
      </Router>
    );
  }
}

export default App;
