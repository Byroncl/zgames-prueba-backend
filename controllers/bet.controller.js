const catchControllerAsync = require("../utils/catch-controller-async");
const BaseController = require("./base.controller");
const { appResponse } = require("../utils/app-response");

let _betService = null;

module.exports = class BetController extends BaseController {
  constructor({ BetService }) {
    super(BetService);
    _betService = BetService;
  }

  createBet = catchControllerAsync(async (req, res) => {
    try {
      const { user, event, team, amount, odds, possibleWin } = req.body;

      // Crear la apuesta utilizando el servicio
      const newBet = await _betService.createBet({
        user,
        event,
        team,
        amount,
        odds,
        possibleWin,
      });

      return appResponse(res, {
        statusCode: 201,
        status: "success",
        message: "Apuesta creada exitosamente",
        data: newBet,
      });
    } catch (error) {
      console.error("Error al crear la apuesta:", error);
      return appResponse(res, {
        statusCode: 400,
        status: "error",
        message: error.message || "Error desconocido",
      });
    }
  });
};
