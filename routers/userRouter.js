import express from "express";
import routes from "../routes";
import {
  userDetail,
  users,
  changePassword,
  getMe,
  getEditProfile,
  postEditProfile,
} from "../controllers/usersController";
import { onlyPrivate, uploadAvatar } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.home, users);
userRouter.get(routes.me, getMe);

userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);

userRouter.get(routes.changePassword(), onlyPrivate, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
