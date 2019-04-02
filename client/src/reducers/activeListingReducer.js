import { ACTIVE_LISTING } from '../actions/types';

const initialState = {
  open: false,
  value: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIVE_LISTING:
      return {
        ...state,
        value: action.payload
      };
    default:
      return state;
  }
}
