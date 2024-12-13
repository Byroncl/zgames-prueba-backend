const catchControllerAsync = require("../utils/catch-controller-async");
const BaseController = require("./base.controller");
const { appResponse } = require("../utils/app-response");

let _competitorService = null;

module.exports = class CompetitorController extends BaseController {
    constructor({ CompetitorService }) {
        super(CompetitorService);
        _competitorService = CompetitorService;
    }
};