// import { StrictMode } from "react";
// import React from "react";
// import { createRoot } from "react-dom/client";
// import { Provider } from "react-redux";
// import store from "../src/store/Store";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../src/store/Store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
