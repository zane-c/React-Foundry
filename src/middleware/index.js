import * as api from '../actions/index';

const middleware = store => next => (action) => {
  switch (action.type) {
    default: {
      return next(action);
    }
  }
};

export default middleware;
