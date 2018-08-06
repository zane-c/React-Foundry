import * as actions from '../actions/index';

const defaults = {};

const reducer = (state = defaults, action) => {
  switch (action.type) {
    case actions.PUT_IN_STORE: {
      return {
        ...state,
        [action.key]: action.value,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
