import Router from "koa-router";
import koaPassport from "koa-passport";
import { FaUser } from "../entities/FaUser";

const router = new Router();

router.get("/", async (ctx) => {
  ctx.body = [{ id: 1, name: "jack"}, { id: 2, name: "rose" }];
});

/**
 * @swagger
 * /user/login:
 *  post:
 *     parameters:
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
    ctx.status = 200;
    ctx.body = user;
    ctx.login(user);
  })(ctx, next);
});

router.get("/login", async (ctx) => {
  console.log("0000000", ctx.session);
  if (ctx.isAuthenticated()) {
    // @ts-ignore
    const { username, email } = ctx.session.passport.user;
    console.log("username", username);
    console.log(111);
    ctx.redirect("/");
    return;
  }
  ctx.status = 400;
  ctx.body = "Not Login";
});

module.exports = router;
