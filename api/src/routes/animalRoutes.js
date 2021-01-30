const controller = require("../controllers/animalController");

const entity = "/animals";

module.exports = (routes) => {
  routes
    .get(`${entity}/all`, controller.get)
    .get(`${entity}/:id`, controller.findOne)
    .post(`${entity}`, controller.post)
    .put(`${entity}/:id`, controller.put)
    .delete(`${entity}/:id`, controller.delete)
    .get(`${entity}`, controller.getAndCount);
};
