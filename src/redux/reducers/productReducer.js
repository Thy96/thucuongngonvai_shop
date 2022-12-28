import { PRODUCT_REQUEST, PRODUCT_SUCCESS, PRODUCT_FAIL } from "../constans/productConstant";

export const productReducer = (state = { product: null }, action) => {
    // console.log(action.type)
    switch (action.type) {
        case PRODUCT_REQUEST:
            return {
                loading: true,
                product: null
            }
        case PRODUCT_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }
        case PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default: return state;
    }
}
