const catchServiceAsync = require("../utils/catch-service-async");
const BaseService = require("./base.service");
const AppError = require("../utils/app-error");

let _outcome = null;

module.exports = class OutcomeService extends BaseService {
  constructor({ Outcome }) {
    super(Outcome);
    _outcome = Outcome;
  }
};
