import Router from "koa-router";
import weichatRobotClient from "../clients/weichatRobotClient";
import { getUser } from "../middleware/auth";

const router = new Router();

router.post("/chat", async (ctx: any) => {
  const user = getUser(ctx);
  const { message } = ctx.request.body;
  try {
    ctx.status = 200;
    ctx.body = await weichatRobotClient.chat(user, message);
  } catch (err) {
    ctx.status = 400;
    // @ts-ignore
    ctx.body = err.message;
  }
});

module.exports = router;