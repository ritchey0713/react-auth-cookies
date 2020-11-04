import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";
import App from "./components/app";
import reducers from "./reducers";
import "./style/main.scss";
import rootReducer from "./reducers";

// const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStore(rootReducer, applyMiddleware(thunk));

function main() {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
