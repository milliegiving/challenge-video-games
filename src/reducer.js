
import { combineReducers } from 'redux';

// http://redux.js.org/docs/recipes/ReducingBoilerplate.html#generating-reducers
const createReducer = (initialState, handlers) => {
  return (state = initialState, action) => {
    const handler = handlers[action.type];
    return handler ? handler(state, action) : state;
  };
};

const sampleInitialState = {
  hello: 'world',
};

const sample = createReducer(sampleInitialState, {

  ['SOME_ACTION_TYPE']: (state, action) => {
    return state;
  },

});

const rootReducer = combineReducers({
  sample,
});

export default rootReducer;
