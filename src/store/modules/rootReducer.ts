import { combineReducers } from 'redux';

import { requestsReducer } from './rootInterceptor';

import user from './user/reducer';
import auth from './auth/reducer';
import order from './order/reducer';

export default combineReducers({
    user,
    order,
    auth,
    requestsReducer
});