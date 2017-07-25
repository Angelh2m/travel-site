var gulp = require('gulp');
var watch = require('gulp-watch');

// gulp.task('default', function() {
//
//   console.log('horray! Gulp task');
//
// });

gulp.task('html', function() {

  console.log('horray! Gulp task');

});

gulp.task('styles', function() {

  console.log('Imagine Sass or PostCss');

});




gulp.task('watch', function() {

    watch('app/index.html', function () {

      gulp.start('html');

    });

    watch('app/assets/styles/**/*.css', function () {

      gulp.start('styles');

    });

});
