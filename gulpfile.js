const gulp = require('gulp');
const babel = require("gulp-babel");
const uglify = require('gulp-uglify');



/* 编译压缩js */
gulp.task('jsBabel',()=>{
  gulp.src(["./src/*.js","./src/*/*.js","!./src/public/*"])
  .pipe(babel())
  .pipe(uglify({
      mangle: true, //类型：Boolean 默认：true 是否修改变量名
      compress: true  //类型：Boolean 默认：true 是否完全压缩
  }))
  .pipe(gulp.dest("./build"));
});


/* 移动文件 */
gulp.task('mvHtml',()=>{
  gulp.src('./src/views/*')
    .pipe(gulp.dest('./build/views/'));
});


/* css */
const [less,postcss,autoprefixer,cssnext,precss,cssmin]= [
  require('gulp-less'),
  require('gulp-postcss'),
  require('autoprefixer'),
  require('cssnext'),
  require('precss'),
  require('gulp-minify-css')
];
gulp.task('cssMini',()=>{
  const processors = [autoprefixer, cssnext, precss];
  gulp.src('./src/public/*/*.less')
    .pipe(less())
    .pipe(postcss(processors))
    .pipe(cssmin())
    .pipe(gulp.dest("./build/public/"));
});


/* 使用es6 */






gulp.task('default',['jsBabel','mvHtml','cssMini'],()=>{
  gulp.watch("./src/views/*.html",['mvHtml']);
  gulp.watch(["./src/*","./src/*/*"],['jsBabel']);
  gulp.watch('./src/public/*/*.less',['cssMini']);
});