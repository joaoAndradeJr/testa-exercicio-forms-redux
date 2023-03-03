import { combineReducers } from 'redux';
import personalData from './personal';
import professionalData from './professional';

const rootReducer = combineReducers({
  personalData,
  professionalData,
});

export default rootReducer;
