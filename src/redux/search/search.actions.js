import * as SearchTypes from './search.types';

export const actSearchUser = keyword => {
  return {
    type: SearchTypes.SEARCH_USER,
    keyword
  };
};
