import { Router } from "express";

import HomeController from "../controllers/home";

const HomeRouter = Router();

HomeRouter.get("/", HomeController.home);

export default HomeRouter;