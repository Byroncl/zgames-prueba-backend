const catchServiceAsync = require("../utils/catch-service-async");
const BaseService = require("./base.service");
const AppError = require("../utils/app-error");

let _market = null;

module.exports = class MarketService extends BaseService {
  constructor({ Market }) {
    super(Market);
    _market = Market;
  }
};
