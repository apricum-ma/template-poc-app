/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

export const errorHandler = () => next => action => {
  return next(action);
};

const composeEnhancers = composeWithDevTools({
  name: "app",
  actionsBlacklist: ["REDUX_STORAGE_SAVE"]
});

const middlewares = [errorHandler, thunk];
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export function moduleHotAccept(mod, store) {
  if (mod.hot) {
    mod.hot.accept("../reducers", () => {
      // eslint-disable-next-line global-require
      const nextRootReducer = require("../reducers/index");
      store.replaceReducer(nextRootReducer.default);
    });
  }
}

export default function configureStore() {
  const store = createStore(rootReducer, {}, enhancer);
  moduleHotAccept(module);
  return store;
}

/* eslint-enable */
