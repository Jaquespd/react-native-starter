import thunk from 'redux-thunk';

import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import {reducers} from './redurcers';

const persistedReducer = persistReducer(
  {
    key: 'nameApp',
    storage: AsyncStorage,
    whitelist: ['auth'],
    // whitelist: ['auth', 'deliveryman'],
  },
  reducers,
);

const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

export {store, persistor};
