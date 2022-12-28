import { CART } from '../../utils/constant';
import { addProductToLS } from '../../utils/logictis';
import { SET_LS_PRODUCT_REQUEST, SET_LS_PRODUCT_SUCCESS, SET_LS_PRODUCT_FAIL } from '../constans/setLocalstoreContant'
import { getLSProduct } from './getLocalstoreAction';

export const setLSProduct = (param) => async (dispatch) => {
    try {
        dispatch({ type: SET_LS_PRODUCT_REQUEST })
        const data = await addProductToLS(param);
        dispatch(getLSProduct(CART));
        dispatch({
            type: SET_LS_PRODUCT_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: SET_LS_PRODUCT_FAIL,
            payload: error
        });
    }
}
