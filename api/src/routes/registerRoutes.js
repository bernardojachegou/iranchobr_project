const controller = require("../controllers/registerController");

const entity = "/registers";

module.exports = (routes) => {
  routes
    .get(`${entity}`, controller.get)
    .get(`${entity}/:id`, controller.getByAnimalId)
    .post(`${entity}`, controller.post)
    .put(`${entity}/:id`, controller.put)
    .delete(`${entity}/:id`, controller.delete);
};
