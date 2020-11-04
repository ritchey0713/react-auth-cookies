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
    case "LOG_IN":
      return {
        ...state,
        currentUser: action.payload.user,
        loggedIn: action.payload.logged_in,
      };
    case "LOG_OUT":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default userReducer;
