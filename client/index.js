/*
  Import Dependencies
*/
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router'
// import 'babel-polyfill';

/*
  Import Components
*/
import App from './components/App';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
/* Import CSS */
import css from  './styles/style.styl';

/* Import our data store */
import store, { history } from './store';


render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Login} />
        <Route path="/dashboard" component={Dashboard}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

