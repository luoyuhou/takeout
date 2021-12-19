import { Context } from "koa";
import consts from "../config/consts";

const auth = () => {
  return async (ctx: Context, next: (() => any)) => {
    console.log("auth", ctx.path);
    if (!ctx.isAuthenticated() && !consts.NOT_LOGIN_PATH.includes(ctx.path)) {
      console.log("----------");
      ctx.redirect("/user/login");
      return;
    }
    return next();
  };
};

export default auth;