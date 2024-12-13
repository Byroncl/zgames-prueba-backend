//Configurar nuestro contenedor de injección de depencia
const { createContainer, asClass, asValue, asFunction } = require("awilix");

//Config
const config = require(".");

//Routes
const Routes = require("../routes");

//Services
const {
  SubPermissionService,
  CompetitorService,
  OutcomeService,
  MarketService,
  EventService,
} = require("../services");
//Controllers
const {
  SubPermissionController,
  CompetitorController,
  OutcomeController,
  MarketController,
  EventController,
} = require("../controllers");

//Startup
const { Database, Server } = require("../startup");

//Routes

const {
  SubPermissionRoutes,
  CompetitorRoutes,
  OutcomeRoutes,
  MarketRoutes,
  EventRoutes,
} = require("../routes/api/index");

//Models
const {
  SubPermission,
  Competitor,
  Outcome,
  Market,
  Event,
} = require("../models");

//Funtions
const {} = require("../functions");

const { protect } = require("../middleware/authMiddleware");
// const AuthUtils = require("../utils/auth");
const container = createContainer();
container
  .register({
    //Configuración principal
    router: asFunction(Routes).singleton(),
    config: asValue(config),
    // AuthUtils: asClass(AuthUtils).singleton(),
    Database: asClass(Database).singleton(),
    Server: asClass(Server).singleton(),
  })
  .register({
    //Configuración de los servicios
    SubPermissionService: asClass(SubPermissionService).singleton(),
    CompetitorService: asClass(CompetitorService).singleton(),
    OutcomeService: asClass(OutcomeService).singleton(),
    MarketService: asClass(MarketService).singleton(),
    EventService: asClass(EventService).singleton(),
  })
  .register({
    //Configuración de los controladores
    SubPermissionController: asClass(SubPermissionController).singleton(),
    CompetitorController: asClass(CompetitorController).singleton(),
    OutcomeController: asClass(OutcomeController).singleton(),
    MarketController: asClass(MarketController).singleton(),
    EventController: asClass(EventController).singleton(),
  })
  .register({
    //Configuración de rutas
    SubPermissionRoutes: asFunction(SubPermissionRoutes).singleton(),
    CompetitorRoutes: asFunction(CompetitorRoutes).singleton(),
    OutcomeRoutes: asFunction(OutcomeRoutes).singleton(),
    MarketRoutes: asFunction(MarketRoutes).singleton(),
    EventRoutes: asFunction(EventRoutes).singleton(),
  })
  .register({
    //Configuración de modelos
    SubPermission: asValue(SubPermission),
    Competitor: asValue(Competitor),
    Outcome: asValue(Outcome),
    Market: asValue(Market),
    Event: asValue(Event),
  })
  .register({
    //middlewares
    AuthMiddleware: asFunction(protect).singleton(),
  })
  .register({
    //Configuración de funciones
  });

module.exports = container;
