import Router from "koa-router";
import koaPassport from "koa-passport";
import { FaUser } from "../entities/FaUser";
import config from "../config/config";
import logger from "../logger";
import _fetch from "../clients";
import { getCustomRepository } from "typeorm";
import { FaUserRepo } from "../repositories/FaUserRepo";
import faUserService from "../services/faUserService";
import {getUser} from "../middleware/auth";
import redisCli from "../clients/redisCli";

const router = new Router();

router.get("/", async (ctx) => {
  ctx.body = [{ id: 1, name: "jack"}, { id: 2, name: "rose" }];
});

/**
 * @swagger
 * /user/login:
 *  post:
 *    description: "用户登陆"
 */
router.post("/login", async (ctx, next) => {
  if (ctx.isAuthenticated()) {
    ctx.redirect("/");
    return;
  }
  await koaPassport.authenticate("local", async (err, user: FaUser) => {
    if (err) {
      ctx.status = 400;
      ctx.body = err;
      return;
    }
    if (!user) {
      ctx.status = 400;
      ctx.body = "Error";
      return;
    }
    user.password = "";
    user.salt = "";
    ctx.status = 200;
    ctx.body = user;
    ctx.login(user);
  })(ctx, next);
});

/**
 * @swagger
 * /user/login:
 *  get:
 *   description: "检测用户登陆"
 */
router.head("/login", async (ctx) => {
  const noRedirect = ctx.request.header["no-redirect"];
  if (ctx.isAuthenticated()) {
    if (noRedirect) {
      const user = getUser(ctx);
      ctx.status = 200;
      ctx.body = user;
      return;
    }
    ctx.redirect("/");
    return;
  }
  ctx.status = 401;
  ctx.body = "Not Login";
});

router.get("/wxlogin", async (ctx) => {
  const { code } = ctx.request.query;
  const {SP_LOGIN_URL: domain, SP_APP_ID: appId, SP_SECRET: secret } = config;

  const url = `${domain}/sns/jscode2session?appid=${appId}&secret=${secret}&js_code=${code}&grant_type=authorization_code`;
  try {
    const output = await _fetch(url, { method: "POST" });
    if (!output) {
      throw new Error("login failed!");
    }
    console.log("output", output);
    const { openid } = output;
    let user = await getCustomRepository(FaUserRepo).findOne({ wxId: openid });
    if (!user) {
      const insert = await faUserService.createUser(openid);
      if (!insert) {
        throw new Error("Please try again!");
      }
      user = await getCustomRepository(FaUserRepo).findOne({ wxId: openid });
    }
    if (!user) {
      throw new Error("Please try again");
    }
    user.password = "";
    user.salt = "";
    ctx.status = 200;
    ctx.body = user;
    ctx.login(user);
  } catch (e: any) {
    logger.error("Get Weichat UserInfo Error: " + e.message);
    throw e;
  }
});

router.get("/scanloginweb", async (ctx) => {
  const { code } = ctx.request.query;
  const user = getUser(ctx);
  console.log("code", code);
  await redisCli.set(`scan-token-${code}`, user.id);
  await redisCli.expire(`scan-token-${code}`, 30);
  ctx.status = 200;
  ctx.body = { msg: "扫描成功" };
});

router.put("/profile", async (ctx) => {
  const user = getUser(ctx);
  try {
    const updateInfo = await faUserService.editProfile(user.id, ctx.request.body);
    if (updateInfo) {
      const userInfo = { ...user, ...updateInfo };
      console.log("profile update", userInfo);
      userInfo.password = "";
      userInfo.salt = "";
      ctx.logout();
      ctx.status = 200;
      ctx.body = userInfo;
      ctx.login(userInfo);
    }
  } catch (e) {
    // @ts-ignore
    logger.error(`Edit Profile Params: ${JSON.stringify(ctx.params)}. Error: ${e.message}`);
  }
});

module.exports = router;
