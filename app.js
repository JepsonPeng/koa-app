const koa = require("koa");
const Router = require("koa-router");

const app = new koa();
const router = new Router();

router.get("/",async ctx=>{
    ctx.body = {msg:"hello koa interfaces"};
});


app.use(router.routes()).use(router.allowedMethods());


const port = process.env.port || require("./evn").port;

app.listen(port,()=>{
    console.log(`server started on ${port}`);
});