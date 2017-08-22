var gulp = require('gulp');
var shell = require('gulp-shell');
var browserSync = require('browser-sync').create();


// Task for building blog when something changed:
gulp.task('serve', shell.task([
  'jekyll serve'
]));

// Task for serving blog with Browsersync
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: '_site/'
    },
    port: 4000,
    ui: {
      port: 4001
    }
  });
  // Reloads page when some of the already built files changed:
  gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', ['serve', 'browserSync']);
