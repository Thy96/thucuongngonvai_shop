import axios from "axios";

const SelectOptionApi = {
    async getSelectOption({ detail_id }) {
        return await axios.get(`https://shop.thomas-dave.store/api/product/detail/${detail_id}`);
    },
}

export default SelectOptionApi;