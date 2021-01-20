const controller = require("../controllers/batchController");

const entity = "/batches";

module.exports = (routes) => {
  routes
    .get(`${entity}`, controller.get)
    .get(`${entity}/:id`, controller.findOne)
    .post(`${entity}`, controller.post)
    .put(`${entity}/:id`, controller.put)
    .delete(`${entity}/:id`, controller.delete);
};
