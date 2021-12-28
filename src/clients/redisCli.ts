import { createClient } from "redis";
import config from "../config/config";
import logger from "../logger";

const redisCli = createClient({
  // redis[s]://[[username][:password]@][host][:port][/db-number]
  // url: `redis://${config.REDIS_PASSWORD}@${config.REDIS_HOST}:${config.REDIS_PORT}`,
});

redisCli.on("error", (err) => logger.error("Redis Client Error: " + err.messages));

redisCli.connect().then(() => logger.info("Redis Client Connect Success."))
  .catch((err) => logger.error("Redis Client Connect Error: " + err.message));

export default redisCli;