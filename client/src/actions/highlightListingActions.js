import { HIGHLIGHT_LISTING } from './types';

export const setHighlight = e => dispatch => {
  dispatch({
    type: HIGHLIGHT_LISTING,
    payload: e
  });
};
