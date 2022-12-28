import { combineReducers } from 'redux';
import { signinReducer } from './authReducer';
import { productReducer } from './productReducer';
import { setLSReducer } from './setLocalstoreReducer';
import { getLSReducer } from './getLocalstoreReducer';
import { removeLSReducer } from './removeLocalstoreReducer';
import { selectOptionReducer } from './selectOptionReducer';

const rootReducer = combineReducers({
    user: signinReducer,
    product: productReducer,
    datasetLS: setLSReducer,
    datagetLS: getLSReducer,
    removeProduct: removeLSReducer,
    selectOption: selectOptionReducer,
});

export default rootReducer;