const catchControllerAsync = require("../utils/catch-controller-async");
const BaseController = require("./base.controller");
const { appResponse } = require("../utils/app-response");

let _userService = null;

module.exports = class UserController extends BaseController {
  constructor({ UserService }) {
    super(UserService);
    _userService = UserService;
  }
  login = async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await _userService.findByEmail(email);
      if (!user) {
        return appResponse(res, {
          statusCode: 404,
          status: "error",
          message: "Usuario no encontrado",
        });
      }

      if (user.password !== password) {
        return appResponse(res, {
          statusCode: 400,
          status: "error",
          message: "Contraseña incorrecta",
        });
      }

      appResponse(res, {
        statusCode: 200,
        status: "success",
        message: "Inicio de sesión exitoso",
        data: { user },
      });
    } catch (error) {
      appResponse(res, {
        statusCode: 500,
        status: "error",
        message: "Error en el servidor",
        data: { error: error.message },
      });
    }
  };
};
