const passport = require("koa-passport");
import bcrypt from "bcryptjs";
import { Strategy as LocalStrategy } from "passport-local";
import { getRepository } from "typeorm";
import { FaUser } from "./entities/FaUser";

passport.serializeUser((user: any, done: (arg0: null, arg1: any) => void) => {
  done(null, user);
});

passport.deserializeUser((sessionInfo: any, done: Function) => {
  done(null, sessionInfo);
});

passport.use(new LocalStrategy({ usernameField: "username", passwordField: "password" },
  (username: string, password: string, cb: Function) => {
    getRepository(FaUser).findOne({ username }).then((userInfo) => {
      if (!userInfo) {
        return cb(`${username} not exist!`);
      }
      if (bcrypt.hashSync(password, userInfo.salt as string) === userInfo.password) {
        return cb(null, userInfo);
      }
      cb("Wrong Password.");
    }).catch((e) => cb(e));
  }));

export default passport;