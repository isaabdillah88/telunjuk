import * as UserTYpes from './user.types';

const INITIAL_STATE = {
  users: [],
  isFetching: false,
  errorMessage: undefined
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTYpes.FETCH_USERS_BEGIN:
      return {
        ...state,
        isFetching: true
      }
    case UserTYpes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        users: action.payload
      }
    case UserTYpes.FETCH_USERS_ERROR:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return state;
  }
};

export default userReducer;
