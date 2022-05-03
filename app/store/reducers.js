import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import appReducer from './app/reducer';

const storage = AsyncStorage;

const rootPersistConfig = {
  key: 'root',
  storage,
};

const appPersistConfig = {
  key: 'app',
  storage,
};

const allReducer = combineReducers({
  app: persistReducer(appPersistConfig, appReducer),
});

const persistedReducer = persistReducer(rootPersistConfig, allReducer);

export default persistedReducer;
