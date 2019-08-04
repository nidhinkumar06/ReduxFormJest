import { combineReducers } from 'redux';
import { reducer as reducerForm } from 'redux-form';
import userReducer from './user';

const rootReducer = combineReducers({
  form: reducerForm,
  user: userReducer,
});

export default rootReducer;