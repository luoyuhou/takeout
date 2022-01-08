import Koa from "koa";
const rTracer = require("cls-rtracer");
import koaCsrf from "koa-csrf";
import koaHelmet from "koa-helmet";
import cors from "koa2-cors";
import bodyParser from "koa-bodyparser";
import serve from "koa-static";
import convert from "koa-convert";
import koaSession from "koa-generic-session";
import routers from "./router";
import config from "./config/config";
import logger from "./logger";
import redisStore from "koa-redis";
import { koaSwagger } from "koa2-swagger-ui";
require("./config/database");

import passport from "./passport";
import { auth } from "./middleware/auth";
require("./clients");

const app = new Koa();
app.use(rTracer.koaMiddleware());
app.keys = ["keys"];
app.use(serve(__dirname + "/public/"));
// @ts-ignore
app.use(convert(koaSession({ store: redisStore({ host: config.REDIS_HOST, port: config.REDIS_PORT, db: config.REDIS_DB, password: config.REDIS_PASSWORD }) })));
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(koaHelmet());
app.use(auth());

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

app.use(koaSwagger({
  routePrefix: "/swagger", // 接口文档访问地址
  swaggerOptions: {
    url: "/swagger/docs", // example path to json 其实就是之后swagger-jsdoc生成的文档地址
  }
}));

app.listen(config.PORT);

logger.info(`Server running on port ${config.PORT}`);

