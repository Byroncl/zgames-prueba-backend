const catchControllerAsync = require("../utils/catch-controller-async");
const BaseController = require("./base.controller");
const { appResponse } = require("../utils/app-response");

let _eventService = null;

module.exports = class EventController extends BaseController {
  constructor({ EventService }) {
    super(EventService);
    _eventService = EventService;
  }
};
