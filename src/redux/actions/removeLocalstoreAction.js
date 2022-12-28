import { removeProductToLS } from '../../utils/logictis';
import { REMOVE_LS_PRODUCT_REQUEST, REMOVE_LS_PRODUCT_SUCCESS, REMOVE_LS_PRODUCT_FAIL } from '../constans/removeLocalstoreContant';

export const removeLSProduct = (param) => async (dispath) => {
    try {
        dispath({ type: REMOVE_LS_PRODUCT_REQUEST })
        await removeProductToLS(param);
        dispath({
            type: REMOVE_LS_PRODUCT_SUCCESS,
            payload: true
        });
    } catch (error) {
        dispath({
            type: REMOVE_LS_PRODUCT_FAIL,
            payload: false
        });
    }
}