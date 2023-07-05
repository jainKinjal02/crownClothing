import { compose , createStore, applyMiddleware} from 'redux';
//import logger from 'redux-logger';
import {persistStore , persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {rootReducer} from './root-reducer';
// root-reducer
const loggerMiddleware = (store) => (next) => (action) => {
    if(!action.type){
        return next(action);
    }
    console.log('type:', action.type);
    console.log('payloadm:' ,action.payload);
    console.log('currentState: ',store.getState());

    next(action);

    console.log('next state: ', store.getState());

}

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer , undefined, composedEnhancers); //store will be using persistedreducer that is the reducer persisting all latest changes as per local storage changes

export const persistor = persistStore(store);