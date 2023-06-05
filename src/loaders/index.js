import registerRoutes from "./routes";
// import sequelize from "./orm";

const loaders = async (app) => {
    registerRoutes(app);
}

export default loaders;