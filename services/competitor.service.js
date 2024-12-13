const catchServiceAsync = require("../utils/catch-service-async");
const BaseService = require("./base.service");
const AppError = require("../utils/app-error");

let _competitor = null;

module.exports = class CompetitorService extends BaseService {
  constructor({ Competitor }) {
    super(Competitor);
    _competitor = Competitor;
  }
};
