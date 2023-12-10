import { combineReducers } from 'redux'
import Device from './device/Reducer'
import User from './user/Reducer'
import Login from './login/Reducer'
import { DEVICE_CONSTANTS_ROOT,USER_ROOT, LOGIN_ROOT } from './Types';

export default combineReducers({
    [DEVICE_CONSTANTS_ROOT]: Device,
    [USER_ROOT]:User,
    [LOGIN_ROOT]:Login
});