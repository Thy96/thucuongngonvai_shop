import { SET_LS_PRODUCT_REQUEST, SET_LS_PRODUCT_SUCCESS, SET_LS_PRODUCT_FAIL } from '../constans/setLocalstoreContant'

export const setLSReducer = (state = { data: null }, action) => {
    switch (action.type) {
        case SET_LS_PRODUCT_REQUEST:
            return {
                loading: true,
                data: null
            }
        case SET_LS_PRODUCT_SUCCESS:
            return {
                loading: false,
                data: action.payload
            }
        case SET_LS_PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default: return state;
    }
}