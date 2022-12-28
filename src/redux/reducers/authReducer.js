import { SIGNIN_FAIL, SIGNIN_REQUEST, SIGNIN_SUCCESS } from "../constans/authConstant";

export const signinReducer = (state = { user: null }, action) => {
    switch (action.type) {
        case SIGNIN_REQUEST: 
            return { 
                loading: true, 
                user: null
            }
        case SIGNIN_SUCCESS: 
            return { 
                loading: false, 
                user: action.payload 
            }
        case SIGNIN_FAIL: 
            return { 
                loading: false, 
                error: action.payload 
            }
        default: return state;
    }
}
