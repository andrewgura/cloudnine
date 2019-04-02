import { HIGHLIGHT_LISTING } from '../actions/types';

const initialState = {
  open: false,
  value: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case HIGHLIGHT_LISTING:
      return {
        ...state,
        value: action.payload
      };
    default:
      return state;
  }
}
