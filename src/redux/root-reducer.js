import { combineReducers } from 'redux';
import userReducer from './user/user.reducers';
import searchReducer from './search/search.reducers';

const appReducers = combineReducers({
  users: userReducer,
  search: searchReducer,
});

export default appReducers;
