var gulp = require('gulp');
var watch = require('gulp-watch');


gulp.task("default", function(){
  console.log("Gulp task!");
});

gulp.task("html", function() {
  console.log("Something happens to HTML");
});

gulp.task("styles", function() {
  return gulp.src("./app/assets/styles/styles.css")
    .pipe()
    .pipe(gulp.dest("./app/temp/styles")
    );
});

gulp.task("watch", function() {
  watch("./app/index.html", function() {
    gulp.start("html");
  });

  watch("./app/assets/styles/**/*.css", function() {
    gulp.start("styles");
  });

});
