import Koa from "koa";
import koaCsrf from "koa-csrf";
import bodyParser from "koa-bodyparser";
import serve from "koa-static";
import convert from "koa-convert";
import koaSession from "koa-generic-session";
import routers from "./router";
import config from "./config/config";
import logger from "./logger";
import redisStore from "koa-redis";
import { koaSwagger } from "koa2-swagger-ui";
require("./config/database")
  .then(() => logger.info("connect db successful!"))
  .catch((e: { message: any; }) => logger.error(`connect db failed. Error: ${e.message}`));

require("./auth");

const app = new Koa();
app.keys = ["keys"];
app.use(serve(__dirname + "/public/"));
// @ts-ignore
app.use(convert(koaSession({ store: redisStore() })));

app.use(bodyParser());

app.use(new koaCsrf({
  invalidTokenMessage: "Invalid CSRF token",
  invalidTokenStatusCode: 403,
  excludedMethods: [ "GET", "HEAD", "OPTIONS", "POST", "PUT", "DELETE" ],
  disableQuery: false
}));

app.use(async (ctx, next) => {
  const startTime = new Date().getTime();
  await next();
  const endTime = new Date().getTime();
  logger.info(`${ctx.method} ${ctx.path} ${endTime - startTime}ms`);
});

app.use(routers.routes());
// app.use(require("./router/swagger").routes());

app.use(koaSwagger({
  routePrefix: "/swagger", // 接口文档访问地址
  swaggerOptions: {
    url: "/swagger/docs", // example path to json 其实就是之后swagger-jsdoc生成的文档地址
  }
}));

app.listen(config.PORT);

logger.info(`Server running on port ${config.PORT}`);

