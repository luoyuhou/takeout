require("isomorphic-fetch");
import logger from "../logger";

const _fetch = async (url: string, options: RequestInit): Promise<Record<string, any>> => {
  let msg = `${options.method} ${url}`;
  if (options.headers) {
    msg += ` ${JSON.stringify(options.headers)}`;
  }
  if (options.body) {
    msg += ` ${JSON.stringify(options.body)}`;
  }
  return new Promise((resolve, reject) => {
    fetch(url, options).then(async (res) => {
      if (res.status !== 200) {
        const responseText = await res.text();
        logger.error(`${msg} ${res.status} ${responseText}`);
        reject(responseText);
      }
      const responseData = await res.json();
      logger.info(`${msg} ${res.status} ${JSON.stringify(responseData)}`);
      resolve(responseData);
    })
      .catch((err) => {
        logger.error(`${msg} Error: ${err}`);
        reject(err);
      });
  });
};

export default _fetch;