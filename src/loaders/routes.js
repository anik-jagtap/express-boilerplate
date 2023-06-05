import HomeRouter from "../api/routes/home";
import UserRouter from "../api/routes/user";

const registerRoutes = (app) => {
    app.use('/', HomeRouter);
    app.use('/api/v1', UserRouter);
}

export default registerRoutes;