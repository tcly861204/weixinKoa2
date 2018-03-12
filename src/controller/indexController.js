const indexController = {
  index(){
    return async(ctx,next)=>{
      ctx.body = await ctx.render('index.html');
    }
  }
};
export default indexController;