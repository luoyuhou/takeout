import { Context } from "koa";
import consts from "../config/consts";
import { FaUser } from "../entities/FaUser";

const auth = () => {
  return async (ctx: Context, next: (() => any)) => {
    if (!ctx.isAuthenticated() && !consts.NOT_LOGIN_PATH.includes(ctx.path)) {
      ctx.redirect("/login");
      return;
    }
    return next();
  };
};

const getUser = (ctx: any): FaUser => {
  const user = ctx.session.passport.user;
  if (!user) {
    ctx.logout();
    ctx.redirect("/login");
  }
  return user;
};

export { auth, getUser };