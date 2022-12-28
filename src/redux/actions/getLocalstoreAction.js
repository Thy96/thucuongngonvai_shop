import { GET_LS_PRODUCT_REQUEST, GET_LS_PRODUCT_SUCCESS, GET_LS_PRODUCT_FAIL } from '../constans/getLocalstoreContant'
import { getLocalStore } from '../../api/storage'

export const getLSProduct = (param) => async (dispath) => {
    try {
        dispath({ type: GET_LS_PRODUCT_REQUEST })
        const data = await getLocalStore(param);
        if (data) {
            dispath({
                type: GET_LS_PRODUCT_SUCCESS,
                payload: data
            });
        }

    } catch (error) {
        dispath({
            type: GET_LS_PRODUCT_FAIL,
            payload: error
        });
    }
}
