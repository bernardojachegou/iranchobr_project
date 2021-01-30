const controller = require("../controllers/registerController");

const entity = "/registers";

module.exports = (routes) => {
  routes
    .get(`${entity}/all`, controller.get)
    .get(`${entity}/:id`, controller.findOne)
    .post(`${entity}`, controller.post)
    .put(`${entity}/:id`, controller.put)
    .delete(`${entity}/:id`, controller.delete)
    .get(`${entity}`, controller.getAndCount)
    .get(`${entity}/animals/:id`, controller.getByAnimalId);
};
