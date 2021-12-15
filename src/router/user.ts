import Router from "koa-router";
import koaPassport from "koa-passport";
import { FaUser } from "../entities/FaUser";

const router = new Router();

router.get("/", async (ctx) => {
  ctx.body = [{ id: 1, name: "jack"}, { id: 2, name: "rose" }];
});

router.post("/login", async (ctx, next) => {
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
  })(ctx, next);
});

module.exports = router;
