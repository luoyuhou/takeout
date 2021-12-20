import { Context } from "koa";
import consts from "../config/consts";

const auth = () => {
  return async (ctx: Context, next: (() => any)) => {
    if (!ctx.isAuthenticated() && !consts.NOT_LOGIN_PATH.includes(ctx.path)) {
      ctx.redirect("/login");
      return;
    }
    return next();
  };
};

export default auth;