import ProductApi from "../../api/ProductApi";
import { PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "../constans/productConstant";

export const getAllProduct = (param) => async (dispatch) => {

	try {
		dispatch({ type: PRODUCT_REQUEST });
		const { data } = await ProductApi.getAll(param);
		dispatch({
			type: PRODUCT_SUCCESS,
			payload: data.data.products,
		});
		return data;
	} catch (error) {
		dispatch({
			type: PRODUCT_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
		return error;
	}
};
