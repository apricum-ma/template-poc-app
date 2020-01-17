import { createStore, applyMiddleware } from 'redux';
// import createLogger from 'redux-logger';
import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from './../sagas';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer);
    })
  }
  Object.keys(rootSaga).forEach(saga => {
    sagaMiddleware.run(rootSaga[saga]);
  });
  store.close = () => store.dispatch(END);
  return store;
}