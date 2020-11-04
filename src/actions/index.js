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

// const checkLoggedInStatus = () => {
//   axios
//     .get("http://localhost:3001/logged_in", {
//       withCredentials: true,
//     })
//     .then((resp) => {
//       if (
//         resp.data.logged_in &&
//         this.state.loggedInStatus === "NOT_LOGGED_IN"
//       ) {
//         this.setState({
//           loggedInStatus: "LOGGED_IN",
//           user: resp.data.user,
//         });
//       } else if (
//         !resp.data.logged_in &&
//         this.state.loggedInStatus === "LOGGED_IN"
//       ) {
//         this.setState({ loggedInStatus: "NOT_LOGGED_IN", user: {} });
//       }
//     })
//     .catch((e) => {
//       "logged in? error", e;
//     });
// };

// axios
//   .post(
//     "http://localhost:3001/registrations",
//     {
//       user: {
//         email: email,
//         password: password,
//         password_confirmation: passwordConfirmation,
//       },
//     },
//     { withCredentials: true }
//   )
//   .then((resp) => {
//     if (resp.data.status === "created") {
//       this.props.handleSuccessfulAuth(resp.data);
//     }
//   })
//   .catch((e) => {
//     console.log("ERR", e);
//   });

// export const handleLogin = (data) => {
//   // this.setState({
//   //   loggedInStatus: "LOGGED_IN",
//   //   user: data.user,
//   // });
// };

// export const handleLogout = () => {
//   this.setState({ loggedInStatus: "NOT_LOGGED_IN", user: {} });
// };
