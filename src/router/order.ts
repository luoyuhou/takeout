import Router from "koa-router";
import meituanClient from "../clients/meituanClient";

const router = new Router();

router.get("/:orderId", async (ctx) => {
  const orderId = ctx.params.orderId;
  ctx.body = await meituanClient.checkOrderStatus(orderId);
});

module.exports = router;