const catchServiceAsync = require("../utils/catch-service-async");
const BaseService = require("./base.service");
const AppError = require("../utils/app-error");

let _event = null;

module.exports = class EventService extends BaseService {
  constructor({ Event }) {
    super(Event);
    _event = Event;
  }
};
