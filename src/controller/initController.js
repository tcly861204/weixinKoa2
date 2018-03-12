import index from './indexController';
const controllerInit = {
  init(app,router){
    app.use(router(_=>{
      _.get("/",index.index())
    }));
  }
}
export default controllerInit;