import express from "express";
import routes from "../routes";
import {
  userDetail,
  users,
  editProfile,
  changePassword,
  getMe,
} from "../controllers/usersController";
import { onlyPrivate } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.home, users);
userRouter.get(routes.me, getMe);
userRouter.get(routes.editProfile(), onlyPrivate, editProfile);
userRouter.get(routes.changePassword(), onlyPrivate, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
