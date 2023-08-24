import { combineReducers, configureStore } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/lib/persistStore'
import storage from 'redux-persist/lib/storage';
import modalReducer from './modalSlice/modalSlice'



const reducers = combineReducers({
  modal: modalReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  lista: ['modal'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);



 