import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import persistReducers from './persistReducers';

const sagaMiddleware = createSagaMiddleware();

// const enhancer = applyMiddleware(sagaMiddleware);
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistReducers(rootReducer),
  composeEnhancer(applyMiddleware(sagaMiddleware))
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
