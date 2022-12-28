import axios from "axios";

const ProductApi = {
  async getAll({ storeId }) {
    return await axios.get(`https://shop.thomas-dave.store/api?storeId=${storeId}`);
  },
}

export default ProductApi;