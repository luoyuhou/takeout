import Router from "koa-router";
import fs from 'fs';
import path from 'path';

const routers = new Router();

routers.get('/heart_check', async (ctx) => {
  ctx.body = "Hello World";
});

const basedir = path.join(__dirname, './router');
fs.readdir(basedir, function(err, files) {
  if (err) {
    throw new Error(`[Read router] Error: ${err.message}`);
  }
  files.map((file) => {
    const extend = path.extname(file);
    if (!['.ts', '.js'].includes(extend)) {
      return;
    }
    const filename = file.substring(0, file.indexOf(extend));
    routers.use(`/${filename}`, require(path.join(basedir, file)).routes());
  });
});

export default routers;