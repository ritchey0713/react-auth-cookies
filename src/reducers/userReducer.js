const INITIAL_STATE = {
  currentUser: null,
  loggedIn: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return {
        ...state,
        currentUser: action.payload.user,
        loggedIn: action.payload.logged_in,
      };
    case "UPDATE_USER":
      return {
        ...state,
        currentUser: action.payload.user,
        loggedIn: action.payload.logged_in,
      };
    default:
      return state;
  }
};

export default userReducer;
