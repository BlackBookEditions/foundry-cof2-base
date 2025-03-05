const gulp = require('gulp');
const less = require('gulp-less');

/* ----------------------------------------- */
/*  Compile LESS
/* ----------------------------------------- */

const SIMPLE_LESS = ["style/*.less"];
function compileLESS() {
  return gulp.src("style/cof-base.less")
      .pipe(less())
      .pipe(gulp.dest("./css"))
}
const css = gulp.series(compileLESS);

/* ----------------------------------------- */
/*  Watch Updates
/* ----------------------------------------- */

function watchUpdates() {
  gulp.watch(SIMPLE_LESS, css);
}

/* ----------------------------------------- */
/*  Export Tasks
/* ----------------------------------------- */

exports.default = gulp.series(
    gulp.parallel(css),
    watchUpdates
);
exports.css = css;