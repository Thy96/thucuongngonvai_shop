import axios from "axios";

const UserApi = {
    async signin({storeId,page}) {
        return await axios.get(`https://shop.thomas-dave.store/api?storeId=${storeId}&page=${page}`);
      },
}

export default UserApi;