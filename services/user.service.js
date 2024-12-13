const BaseService = require("./base.service");

module.exports = class UserService extends BaseService {
  constructor({ User }) {
    super(User);
    this._user = User; // Asegúrate de asignar el modelo a una propiedad de la clase
  }

  async findByEmail(email) {
    return await this._user.findOne({ email }); // Usa this._user para acceder al modelo
  }
};
