import api from "./connect";

export default {
  getOrders() {
    let params = new URLSearchParams();
    return api.get("/findOrders", params);
  },
  clickAssembly(status, orderId) {
    let params = new URLSearchParams();
    params.append("status", status);
    params.append("orderId", orderId);
    return api.post("/newStatus", params);
  },
};
