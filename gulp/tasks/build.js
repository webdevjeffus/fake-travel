var gulp = require( "gulp");
var imagemin = require( "gulp-imagemin");
var del = require("del");
var usemin = require("gulp-usemin");
var rev = require("gulp-rev");
var cssnano = require("gulp-cssnano");
var uglify = require("gulp-uglify");
var browserSync = require("browser-sync").create();

gulp.task("previewDist", function() {
  browserSync.init({
    notify: false, /* optional--turns off msgs of changes in browser window */
    server: {
      baseDir: "dist"
    }
  });
});

gulp.task("deleteDistFolder", function() {
  return del("./dist");
});

gulp.task("copyGeneralFiles", ["deleteDistFolder"], function() {
  var pathsToCopy = [
    "./app/**/*",
    "!./app/index.html",
    "!./app/assets/images/**/*",
    "!./app/assets/styles/**/*",
    "!./app/assets/scripts/**/*",
    "!./app/temp",
    "!./app/temp/**/*"
  ];
  return gulp.src( pathsToCopy )
    .pipe(gulp.dest("./dist"));
});


gulp.task("optimizeImages", ["deleteDistFolder", "icons"], function() {
  var pathsToOptimize = [
    "./app/assets/images/**/*",
    "!./app/assets/images/icons",
    "!./app/assets/images/icons/**/*"
  ];
  return gulp.src( pathsToOptimize )
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest("./dist/assets/images"));
});

gulp.task("usemin", ["deleteDistFolder", "styles", "scripts"], function() {
  return gulp.src("./app/index.html")
    .pipe(usemin({
      css: [ function() {return rev()}, function() {return cssnano()}],
      js: [function() {return rev()}, function() {return uglify()}]
    }))
    .pipe(gulp.dest("./dist"));
});



gulp.task("build", ["deleteDistFolder", "copyGeneralFiles", "optimizeImages", "usemin"]);

