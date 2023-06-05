import { Router } from "express";

import UserController from "../controllers/user";

const UserRouter = Router();

UserRouter.get("/user/:id", UserController.getUserById);

export default UserRouter;