const { Router } = require("express");

module.exports = function ({ MarketController }) {
  const router = Router();

  router.get("/get-all", MarketController.getAll);
  router.get("/get/:id", MarketController.getOne);
  router.post("/create", MarketController.create);
  router.put("/update/:id", MarketController.update);
  router.delete("/delete/:id", MarketController.delete);

  return router;
};
