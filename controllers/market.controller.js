const catchControllerAsync = require("../utils/catch-controller-async");
const BaseController = require("./base.controller");
const { appResponse } = require("../utils/app-response");

let _marketService = null;

module.exports = class MarketController extends BaseController {
  constructor({ MarketService }) {
    super(MarketService);
    _marketService = MarketService;
  }
};
