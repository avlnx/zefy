initialState = {
  loading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
      // return Object.assign({}, state, {loggedIn: action.loggedIn});
    default:
      return state;
  }
};

// The types of actions that you can dispatch to modify the state of the store
export const loadingTypes = {
  UPDATE_LOADING: 'UPDATE_LOADING',
};