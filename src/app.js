import Koa from 'koa';
import path from 'path';
import router from 'koa-simple-router';
import convert from 'koa-convert';
import babelCore from 'babel-core/register';
import babelPolyFill from 'babel-polyfill';
import co from 'co';
import koaStatic from 'koa-static';
import render from 'koa-swig';
import CONFIG from "./config/config";
import initController from './controller/initController';


let app = new Koa();
//静态文件配置
app.context.render = co.wrap(render({
  root: CONFIG.get('viewsDIR'),
  autoescape: true,
  // cache: 'memory',
  cache: false,
  ext: "html",
  varControls: ['[[', ']]'],
  writeBody: false
}));
app.use(convert(koaStatic(CONFIG.get('staticDIR'))));

//配置路由
initController.init(app,router);

app.listen(CONFIG.get('port'));

