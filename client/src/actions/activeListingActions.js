import { ACTIVE_LISTING } from './types';

export const handleChange = e => dispatch => {
  dispatch({
    type: ACTIVE_LISTING,
    payload: e
  });
};
