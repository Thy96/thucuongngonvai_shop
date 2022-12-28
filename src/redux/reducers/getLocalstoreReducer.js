import { GET_LS_PRODUCT_REQUEST, GET_LS_PRODUCT_SUCCESS, GET_LS_PRODUCT_FAIL } from '../constans/getLocalstoreContant'

export const getLSReducer = (state = { data: null }, action) => {
    // console.log(action.type);
    switch (action.type) {
        case GET_LS_PRODUCT_REQUEST:
            return {
                loading: true,
                data: null
            }
        case GET_LS_PRODUCT_SUCCESS:
            return {
                loading: false,
                data: action.payload
            }
        case GET_LS_PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default: return state;
    }
}