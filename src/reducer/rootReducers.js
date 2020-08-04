import { combineReducers } from 'redux';
import {signInReducers} from './reducerSingin';
import {userReducer} from './reducers';
import {registerReducers} from './reducerRegister';
import {ListuserReducers} from './reducerslistuser';

const rootReducer = combineReducers({
    userReducer,
    signInReducers,
    registerReducers,
    ListuserReducers,
          
});

export default rootReducer;