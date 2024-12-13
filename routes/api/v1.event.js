const { Router } = require("express");

module.exports = function ({ EventController }) {
  const router = Router();

  router.get("/get-all", EventController.getAll);
  router.get("/get/:id", EventController.getOne);
  router.post("/create", EventController.create);
  router.put("/update/:id", EventController.update);
  router.delete("/delete/:id", EventController.delete);

  return router;
};
