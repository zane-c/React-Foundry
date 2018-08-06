import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/app';
import Welcome from './components/welcome/welcome.controller';
import indexMiddleware from './middleware/index';
import indexReducer from './reducers/index';

const rootMiddleware = [
  indexMiddleware,
];

const rootReducer = combineReducers({
  routing: routerReducer,
  store: indexReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(
    ...rootMiddleware,
  ),
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="/:404" component={null} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('#root'),
);
