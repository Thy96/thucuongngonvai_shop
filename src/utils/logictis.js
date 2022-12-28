import { getLocalStore, removeLocalStore, setLocalStore } from "../api/storage";

export const exampleFunction = (params) => {
    // console.log(params);
    return params;
}

export const addProductToLS = async (product) => {
    let listProduct = await JSON.parse(getLocalStore("cart"));
    if (listProduct == null) {
        let tempList = [];
        console.log('Cart local storage is empty');
        tempList.push(product)
        await setLocalStore("cart", JSON.stringify(tempList))
    } else {
        const newListProduct = await JSON.parse(getLocalStore("cart"));
        let tempList = newListProduct;
        tempList.push(product);
        await setLocalStore("cart", JSON.stringify(tempList));

    }
}

export const removeProductToLS = async (product_id) => {

    let listProduct = await JSON.parse(getLocalStore("cart"));
    const productFillter = listProduct.filter((item) => item.id !== product_id)

    await removeLocalStore("cart");
    await setLocalStore("cart", JSON.stringify(productFillter));
}
