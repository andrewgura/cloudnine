import { combineReducers } from 'redux';
import activeListingReducer from './activeListingReducer';
import highLightListingReducer from './highLightListingReducer';

export default combineReducers({
  activeListing: activeListingReducer,
  highLightListing: highLightListingReducer
});
