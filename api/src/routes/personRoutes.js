const controller = require("../controllers/personController");

const entity = "/people";

module.exports = (routes) => {
  routes
    .get(`${entity}/all`, controller.get)
    .post(`${entity}`, controller.post)
    .get(`${entity}/:id`, controller.findOne)
    .put(`${entity}/:id`, controller.put)
    .delete(`${entity}/:id`, controller.delete)
    .get(`${entity}`, controller.getAndCount);
};
