var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require("browser-sync").create();

gulp.task("watch", function() {

  browserSync.init({
    notify: false, /* optional--turns off msgs of changes in browser window */
    server: {
      baseDir: "app"
    }
  });

  watch("./app/index.html", function() {
    browserSync.reload();
  });

  watch("./app/assets/styles/**/*.css", function() {
    gulp.start("injectCss");
  });

  watch("./app/assets/scripts/**/*.js", function() {
    gulp.start("scriptsRefresh");
  });

});


gulp.task('injectCss', ["styles"], function() {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});


gulp.task("scriptsRefresh", ["scripts"], function() {
  browserSync.reload();
})
