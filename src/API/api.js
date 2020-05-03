import api from "./connect";

export default {
  getOrders() {
    let params = new URLSearchParams();
    return api.get("/findOrders", params);
  },
};
