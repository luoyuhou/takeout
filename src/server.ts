import Koa from 'koa';
import koaCsrf from "koa-csrf";
import bodyParser from "koa-bodyparser";
import convert from "koa-convert";
import koaSession from "koa-generic-session";
import routers from "./router";
import config from "./config";
import logger from "./logger";

const app = new Koa();

app.use(convert(koaSession({})));

app.use(bodyParser());

app.use(new koaCsrf({
  invalidTokenMessage: 'Invalid CSRF token',
  invalidTokenStatusCode: 403,
  excludedMethods: [ 'GET', 'HEAD', 'OPTIONS' ],
  disableQuery: false
}));

app.use(routers.routes());

app.listen(config.PORT);

logger.info(`Server running on port ${config.PORT}`);
