import { combineReducers } from 'redux';
import updateHeaderReducer from './update-header/update-header.reducer';

const rootReducer = combineReducers({
  updateHeaderReducer
});

export default rootReducer;