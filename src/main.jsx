import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { legacy_createStore as createStore } from "redux";
import allReducers from "./Reducers/combinedReducers.jsx";
import { Provider } from "react-redux";

const store = createStore(allReducers);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
