const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { ErrorMiddleware, NotFoundMiddleware } = require("../middleware");

module.exports = function ({
  SubPermissionRoutes,
  CompetitorRoutes,
  OutcomeRoutes,
  MarketRoutes,
  EventRoutes,
  UserRoutes,
  BetRoutes,
}) {
  const router = express.Router();
  const apiRouter = express.Router();
  apiRouter
    .use(express.json())
    .use(cors())
    .use(morgan("dev"))
    .use(express.urlencoded({ extended: true }));
  apiRouter.use("/sub-permission", SubPermissionRoutes);
  apiRouter.use("/competitor", CompetitorRoutes);
  apiRouter.use("/outcome", OutcomeRoutes);
  apiRouter.use("/market", MarketRoutes);
  apiRouter.use("/event", EventRoutes);
  apiRouter.use("/user", UserRoutes);
  apiRouter.use("/bet", BetRoutes);

  router.use("/v1/api", apiRouter);
  router.use("/", (req, res) => {
    res.send("/v1/api");
  });

  router.use(NotFoundMiddleware);
  router.use(ErrorMiddleware);

  return router;
};
