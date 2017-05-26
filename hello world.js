const Koa = require("koa");
const app = new Koa();

app.use(
    ctx => {
        //ctx.body = '你好，世界！'; 
        ctx.body = {'msg':'你好，世界！'};
    }
);

app.listen(3000);