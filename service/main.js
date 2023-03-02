const Koa = require('koa');

const app = new Koa();
const port = '3368';

app.use(ctx => {
  ctx.body = 'hellp world';
})

app.listen(port)

