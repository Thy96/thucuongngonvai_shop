import { REMOVE_LS_PRODUCT_REQUEST, REMOVE_LS_PRODUCT_SUCCESS, REMOVE_LS_PRODUCT_FAIL } from '../constans/removeLocalstoreContant';

export const removeLSReducer = (state = { dataRemove: null }, action) => {
    // console.log(action.type);
    switch (action.type) {
        case REMOVE_LS_PRODUCT_REQUEST:
            return {
                loading: true,
                dataRemove: null
            }
        case REMOVE_LS_PRODUCT_SUCCESS:
            return {
                loading: false,
                dataRemove: action.payload
            }
        case REMOVE_LS_PRODUCT_FAIL:
            return {
                loading: false,
                dataRemove: action.payload
            }
        default: return state;
    }
}