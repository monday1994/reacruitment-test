import { combineReducers } from 'redux';
import requestsManagerReducer from './requestsManagerReducer';
import searchReducer from './searchReducer';
import tracksReducer from './tracksReducer';

const appReducer = (state: any, action: any) => {
    return combineReducers({
        requestsManager: requestsManagerReducer,
        albums: searchReducer,
        tracksList: tracksReducer
    })(state, action);
};

export type AppState = ReturnType<typeof appReducer>;
export default appReducer;