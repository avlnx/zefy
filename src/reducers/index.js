import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import LoadingReducer from './LoadingReducer';

export default combineReducers({
  user: UserReducer,
  loading: LoadingReducer,
});
