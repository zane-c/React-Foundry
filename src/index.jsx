import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import App from './components/app';
import Welcome from './components/welcome/welcome.controller';
import colorsMiddleware from './middleware/colors';
import colorsReducer from './reducers/colors';

const rootMiddleware = [
  colorsMiddleware,
];

const rootReducer = combineReducers({
  colors: colorsReducer,
  routing: routerReducer,
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
