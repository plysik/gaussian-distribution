import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import configureStore from "./App.store";
import { initialState } from "./App.reducer";

const store = configureStore(initialState);
store.dispatch({ type: "APP_INIT" });
ReactDOM.render(<App store={store} />, document.getElementById("root"));
registerServiceWorker();
