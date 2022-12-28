import SelectOptionApi from "../../api/SelectOptionApi";
import { SELECT_OPTION_REQUEST, SELECT_OPTION_SUCCESS, SELECT_OPTION_FAIL } from '../constans/selectOptionContant'

export const getAllSelectOption = (param) => async (dispatch) => {
    console.log(param);
    try {
        dispatch({ type: SELECT_OPTION_REQUEST });
        const { data } = await SelectOptionApi.getSelectOption(param);
        dispatch({
            type: SELECT_OPTION_SUCCESS,
            payload: {
                size: data?.data?.Size,
                topping: data?.data?.Topping
            },
        });
        return data;
    } catch (error) {
        dispatch({
            type: SELECT_OPTION_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
        return error;
    }
};
