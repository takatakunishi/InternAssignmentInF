import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import rootReducer from './reducers';
import RootState from './state'
import { Provider } from 'react-redux';
import { persistReducer, persistStore, PersistConfig } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react';


const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage,
  whitelist: ['user', 'prase']
}
const persistedReducer = persistReducer<RootState, any>(persistConfig, rootReducer)
const store = createStore(persistedReducer);

const persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
