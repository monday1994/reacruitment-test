import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './redux/reducers/indexReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['utils']
};
//const middleware = [logger,thunk];
const middleware = [thunk];
const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = composeWithDevTools({trace: true, traceLimit: 25 });

const store = createStore(persistedReducer, {}, composeEnhancers(applyMiddleware(...middleware)));
const persistor = persistStore(store);

/*if (window.Cypress) {
    window.__store__ = store;
}*/

export {store};
export {persistor};