initialState = {
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return {
        ...state,
        user: action.payload,
      };
      // return Object.assign({}, state, {loggedIn: action.loggedIn});
    default:
      return state;
  }
};

// The types of actions that you can dispatch to modify the state of the store
export const userTypes = {
  UPDATE_USER: 'UPDATE_USER',
};