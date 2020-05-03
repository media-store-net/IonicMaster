import api from "./connect";

export default {
  getOrders() {
    let params = new URLSearchParams();
    return api.get("/orders/findOrder", params);
  },
};
