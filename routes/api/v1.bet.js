const { Router } = require("express");

module.exports = function ({ BetController }) {
  const router = Router();

  router.get("/get-all", BetController.getAll);
  router.get("/get/:id", BetController.getOne);
  router.post("/create", BetController.createBet);
  router.put("/update/:id", BetController.update);
  router.delete("/delete/:id", BetController.delete);

  return router;
};
