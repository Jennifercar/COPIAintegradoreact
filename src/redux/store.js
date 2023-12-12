import { combineReducers, configureStore } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/lib/persistStore'
import storage from 'redux-persist/lib/storage';
import modalReducer from './modalSlice/modalSlice';
import categoriaReducer from './categoriaSlice/categoriaSlice';
import productosReducer from './productos/productoSlice';
import menuHamburReducer from './menuHamburSlice/menuHamburSlice';

const reducers = combineReducers({
  modal: modalReducer,
  categorias : categoriaReducer,
  productos: productosReducer,
  menu: menuHamburReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['modal'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);



 