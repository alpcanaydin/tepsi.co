import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from './modules';

const configureStore = (prelodedState, history) => {
  const middlewares = [thunk, routerMiddleware(history)];

  const composed = [applyMiddleware(...middlewares)];

  const store = createStore(rootReducer, prelodedState, compose(...composed));
  
  /* istanbul ignore if */
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger());
    /* eslint-disable */
    composed.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    /* eslint-enable */
  }

  /* istanbul ignore if */
  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./modules', () => {
      // eslint-disable-next-line
      const nextRootReducer = require('./modules').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
