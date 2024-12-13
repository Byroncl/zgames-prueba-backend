const catchControllerAsync = require("../utils/catch-controller-async");
const BaseController = require("./base.controller");
const { appResponse } = require("../utils/app-response");

let _outcomeService = null;

module.exports = class OutcomeController extends BaseController {
  constructor({ OutcomeService }) {
    super(OutcomeService);
    _outcomeService = OutcomeService;
  }
};
