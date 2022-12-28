import { SELECT_OPTION_REQUEST, SELECT_OPTION_SUCCESS, SELECT_OPTION_FAIL } from '../constans/selectOptionContant'

export const selectOptionReducer = (state = { selectOption: null }, action) => {
    console.log(action.type)
    switch (action.type) {
        case SELECT_OPTION_REQUEST:
            return {
                loading: true,
                selectOption: null
            }
        case SELECT_OPTION_SUCCESS:
            return {
                loading: false,
                selectOption: action.payload
            }
        case SELECT_OPTION_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default: return state;
    }
}
