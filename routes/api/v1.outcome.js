const { Router } = require("express");

module.exports = function ({ OutcomeController }) {
  const router = Router();

  router.get("/get-all", OutcomeController.getAll);
  router.get("/get/:id", OutcomeController.getOne);
  router.post("/create", OutcomeController.create);
  router.put("/update/:id", OutcomeController.update);
  router.delete("/delete/:id", OutcomeController.delete);

  return router;
};
