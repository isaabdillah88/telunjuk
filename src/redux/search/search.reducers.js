import * as SearchTypes from './search.types';

const INITIAL_STATE = '';

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchTypes.SEARCH_USER:
      return action.keyword;
    default:
      return state;
  }
};

export default searchReducer;
