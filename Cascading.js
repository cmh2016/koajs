const Koa = require('koa');
const app = new Koa();
 
app.keys = ['im a newer secret', 'i like turtle'];

app.use(async function (ctx,next) {  
    const start = new Date();
    await next();//跳过此函数的以下代码执行下个函数
    const ms = new Date() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

app.use(async function (ctx,next) {
    const start = new Date();
    await next();//跳过此函数的以下代码执行下个函数
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});
//没有next()的时候逆序执行
app.use(ctx => {
    ctx.body = 'hello world';
    console.log(ctx);
    ctx.cookies.set('name', 'tobi', { signed: true });
});

app.on('error', (err, ctx) =>
  log.error('server error', err, ctx)
);

app.listen(3000);