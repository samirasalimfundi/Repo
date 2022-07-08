import http from "../http-common";
class Service {
  getAll() {
    return http.get("/Customer");
  }
  get(id) {
    return http.get(`/Customer/${id}`);
  }
  create(data) {
    return http.post("/Customer", data);
  }
  update(id, data) {
    return http.put(`/Customer/${id}`, data);
  }
  delete(id) {
    return http.delete(`/Customer/${id}`);
  }
  deleteAll() {
    return http.delete(`/Customer`);
  }
  findByTitle(title) {
    return http.get(`/Customer?title=${title}`);
  }
}
export default new Service();