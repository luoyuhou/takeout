import Router from "koa-router";
import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
  // openapi: "3.0.0",
  info: {
    title: "blog项目访问地址",
    version: "1.0.0",
    description: "API",
  },
  host: "localhost:3001",// 想着改这里，如果不修改，那么接口文档访问地址为：localhost:8000/swagger
  basePath: "/" // Base path (optional)
};

const options = {
  swaggerDefinition,
  apis: ["./src/router/*.ts"], // 写有注解的router的存放地址, 最好path.join()
};

const swaggerSpec = swaggerJSDoc(options);

const router = new Router();

// 通过路由获取生成的注解文件
router.get("/docs", async function (ctx: { set: (arg0: string, arg1: string) => void; body: object; }) {
  ctx.set("Content-Type", "application/json");
  ctx.body = swaggerSpec;
});

module.exports = router;