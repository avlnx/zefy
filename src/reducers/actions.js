// Helper functions to dispatch actions, optionally with payloads
import {userTypes} from './UserReducer';
import {loadingTypes} from './LoadingReducer';

export const actions = {
  updateUser: (item) => {
    return {type: userTypes.UPDATE_USER, payload: item};
  },
  updateLoading: (item) => {
    return {type: loadingTypes.UPDATE_LOADING, payload: item};
  },
};