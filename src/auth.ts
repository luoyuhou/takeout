import koaPassport from "koa-passport";
import bcrypt from 'bcryptjs';
import { Strategy as LocalStrategy } from "passport-local";
import { getRepository } from "typeorm";
import { FaUser } from "./entities/FaUser";

koaPassport.serializeUser((user: any, done) => {
  done(null, user);
});

koaPassport.deserializeUser((sessionInfo: any, done: Function) => {
  done(null, sessionInfo);
});

koaPassport.use(new LocalStrategy({ usernameField: "username", passwordField: "password" },
  (username: string, password: string, cb: Function) => {
    getRepository(FaUser).findOne({ username }).then((userInfo) => {
      if (!userInfo) {
        return cb(`${username} not exist!`);
      }
      if (bcrypt.hashSync(password, userInfo.salt as string) === userInfo.password) {
        return cb(null, userInfo);
      }
      cb('Wrong Password.');
    }).catch((e) => cb(e));
  }));