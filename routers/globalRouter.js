import express from "express";
import routes from "../routes";
import passport from "passport";
import { home, search } from "../controllers/videosController";
import {
  logout,
  getJoin,
  getLogin,
  postJoin,
  postLogin,
  postGithubLogin,
  githubLogin,
  facebookLogin,
  postFacebookLogin,
} from "../controllers/usersController";
import { onlyPublic, onlyPrivate } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.logout, logout);

globalRouter.get(routes.search, onlyPrivate, search);

globalRouter.get(routes.github, githubLogin);
globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogin
);

globalRouter.get(routes.facebook, facebookLogin);
globalRouter.get(
  routes.facebookCallback,
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  postFacebookLogin
);
export default globalRouter;
