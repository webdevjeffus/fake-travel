var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssvars = require("postcss-simple-vars");
var nested = require("postcss-nested");
var cssImport = require("postcss-import");
var browserSync = require("browser-sync").create();


gulp.task("default", function(){
  console.log("Gulp task!");
});

gulp.task("html", function() {
  console.log("Something happens to HTML");
});


gulp.task("styles", function() {
  return gulp.src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest("./app/temp/styles")
    );
});

gulp.task('injectCss', ["styles"],function() {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});


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

});

