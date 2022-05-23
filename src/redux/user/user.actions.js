import * as UserTYpes from './user.types';
import userApi from '../../apis/user.api';

export const fetchUsersBegin = () => ({
  type: UserTYpes.FETCH_USERS_BEGIN,
});

export const fetchUsersSuccess = (users) => ({
  type: UserTYpes.FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersError = (errorMessage) => ({
  type: UserTYpes.FETCH_USERS_ERROR,
  payload: errorMessage,
});

export const fetchUsers = () => {
  return async (dispatch) => {
    await userApi
      .get('/data/v1/user?limit=100')
      .then((response) => {
        const users = response.data.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => dispatch(fetchUsersError(error.message)));
  };
};
