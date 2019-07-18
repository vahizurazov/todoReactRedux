import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import App from "./components/App";
import rootReducer from "./reducers";
import "./styles/index.css";
import "./styles/base.css";

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
