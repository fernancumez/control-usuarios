import { createStore, applyMiddleware, compose } from "redux";
import { rootReducers } from "../reducers";
import thunk from "redux-thunk";

export const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunk),

    typeof window === "object" &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);
