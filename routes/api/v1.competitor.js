const { Router } = require("express");

module.exports = function ({ CompetitorController }) {
  const router = Router();

  router.get("/get-all", CompetitorController.getAll);
  router.get("/get/:id", CompetitorController.getOne);
  router.post("/create", CompetitorController.create);
  router.put("/update/:id", CompetitorController.update);
  router.delete("/delete/:id", CompetitorController.delete);

  return router;
};
