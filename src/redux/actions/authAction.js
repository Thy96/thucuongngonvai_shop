import { SIGNIN_FAIL, SIGNIN_REQUEST, SIGNIN_SUCCESS } from "../constans/authConstant";

export const signin = (user) => async (dispatch) => {
	try {
		dispatch({ type: SIGNIN_REQUEST });
		const { data } = await userApi.signin(user);
		dispatch({
			type: SIGNIN_SUCCESS,
			payload: data,
		});
		return data;
	} catch (error) {
		dispatch({
			type: SIGNIN_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
		return error;
	}
};
