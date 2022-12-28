export const setLocalStore = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return JSON.stringify(value);
    } catch (error) {
        return error;
    }
}
export const getLocalStore = (key) => {
    try {
        let result = JSON.parse(localStorage.getItem(key));
        return result;
    } catch (error) {
        return error;
    }
}

export const removeLocalStore = (key) => {
    try {
        JSON.parse(localStorage.removeItem(key));
        return true;
        // console.log(result);
    } catch (error) {
        return error;
    }

}

