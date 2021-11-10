import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Spinner from "./utility/Spinner/Spinner";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import reduxPromise from "redux-promise";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
//local sorage

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["siteModal"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const theStore = applyMiddleware(reduxPromise)(createStore)(persistedReducer);
const persistor = persistStore(theStore);
ReactDOM.render(
  <Provider store={theStore}>
    <PersistGate loading={<Spinner />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,

  document.getElementById("root")
);
