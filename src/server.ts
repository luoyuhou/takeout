import Koa from "koa";
import koaCsrf from "koa-csrf";
import bodyParser from "koa-bodyparser";
import convert from "koa-convert";
import koaSession from "koa-generic-session";
import routers from "./router";
import config from "./config";
import logger from "./logger";
import redisStore from "koa-redis";
require("./database")
  .then((r: any) => {
    require("./auth");

    const app = new Koa();
    app.keys = ["keys"];
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

    app.listen(config.PORT);

    logger.info(`Server running on port ${config.PORT}`);
  })
  .catch((e: { message: any; }) => logger.error(`connect db failed. Error: ${e.message}`));

