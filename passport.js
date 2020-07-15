import passport from "passport";
import User from "./models/User";
import routes from "./routes";
import GitHubStrategy from "passport-github";
import { githubLoginCallback } from "./controllers/usersController";
import dotenv from "dotenv";
dotenv.config();

passport.use(User.createStrategy());

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://localhost:4000${routes.githubCallback}`,
    },
    githubLoginCallback
  )
);
