export const createUser = (data) => {
  return (dispatch) => {
    fetch("http://localhost:3001/registrations", {
      method: "POST",
      credentials: "include",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((data) => dispatch(finishCreateUser(data)));
  };
};

const finishCreateUser = (data) => ({
  type: "CREATE_USER",
  payload: data,
});

export const checkLoggedInStatus = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/logged_in", {
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((data) => dispatch(updateUserStatus(data)));
  };
};

const updateUserStatus = (data) => ({
  type: "UPDATE_USER",
  payload: data,
});

export const logOut = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/logout", {
      method: "DELETE",
      credentials: "include",
    }).then(() => dispatch(finishLogout()));
  };
};

const finishLogout = () => ({
  type: "LOG_OUT",
});

export const logIn = (data) => {
  return () => {
    fetch("http://localhost:3001/sessions", {
      method: "POST",
      credentials: "include",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((json) => dispatch(finishLogIn(json)));
  };
};

const finishLogIn = (data) => ({
  type: "LOG_IN",
  payload: data,
});

// axios
//   .post(
//     "http://localhost:3001/sessions",
//     {
//       user: {
//         email: email,
//         password: password,
//       },
//     },
//     { withCredentials: true }
//   )
//   .then((resp) => {
//     if (resp.data.logged_in) {
//       this.props.handleSuccessfulAuth(resp.data);
//     }
//   })
//   .catch((e) => {
//     console.log("LOG IN ERR", e);
//   });
