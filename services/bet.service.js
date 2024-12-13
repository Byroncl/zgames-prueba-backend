const catchServiceAsync = require("../utils/catch-service-async");
const BaseService = require("./base.service");
const AppError = require("../utils/app-error");

let _bet = null;

module.exports = class BetService extends BaseService {
  constructor({ Bet }) {
    super(Bet);
    _bet = Bet;
  }

  // Método para crear una apuesta personalizada
  async createBet(betData) {
    const { user, event, team, amount, odds, possibleWin } = betData;

    // Validar que todos los campos requeridos están presentes
    if (!user || !event || !team || !amount || !odds || !possibleWin) {
      throw new AppError("Todos los campos son obligatorios", 400);
    }

    // Validaciones adicionales (puedes personalizarlas según tus necesidades)
    if (amount <= 0) {
      throw new AppError("El monto debe ser mayor a 0", 400);
    }

    // Crear una nueva apuesta
    const newBet = await _bet.create({
      user,
      event,
      team,
      amount,
      odds,
      possibleWin,
    });

    return newBet;
  }
};
