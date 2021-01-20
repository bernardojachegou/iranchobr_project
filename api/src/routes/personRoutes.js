const controller = require("../controllers/personController");

const entity = "/people";

module.exports = (routes) => {
  routes
    .get(`${entity}`, controller.get)
    .get(`${entity}/:id`, controller.findOne)
    .post(`${entity}`, controller.post)
    .put(`${entity}/:id`, controller.put)
    .delete(`${entity}/:id`, controller.delete);
};
