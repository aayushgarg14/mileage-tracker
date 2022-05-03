import { createStore } from 'redux';
// wrapper for reducer and store
import { persistStore } from 'redux-persist';

import persistedReducer from './reducers';

const store = createStore(persistedReducer);

const persistor = persistStore(store);

// // If you want to clear the persisted state uncomment the next line
// persistor.purge();

export { store, persistor };
