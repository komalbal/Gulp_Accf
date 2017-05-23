var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
//var watch = require(gulp-watch);
    //pngquant = require('imagemin-pngquant');

gulp.task('imagemin', function () {
	console.log('in imagemin');
    return gulp.src('src/images/*.png')
        .pipe(imagemin())
        .pipe(gulp.dest('imagemin-img'));
});

gulp.task('sass', function(){
  return gulp.src('src/sass/styles.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('src/css'))
	.pipe(browserSync.reload({
      stream: true
    }))
});


gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task('watch' , ['browserSync' , 'sass'] ,function(){
	gulp.watch('src/sass/styles.scss' , ['sass'])
});

gulp.task('default', ['sass']);

/* ar gulp = require('gulp');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');

// create a default task and just log a message
/* gulp.task('default', function() {
  return gutil.log('Gulp is running!')
}); */

// gulp.task('styles', function() {
// gulp.src(['src/styles/*.css'])
// .pipe(concat('styles.css'))
// .pipe(autoprefix('last 2 versions'))
// .pipe(minifyCSS())
// .pipe(gulp.dest('build/styles/'));
// });

// gulp.task('default' , ['styles']);

/* gulp.task('imagemin', function() {
var imgSrc = './src/images/*',
imgDst = 'build/images';
gulp.src(imgSrc)
//.pipe(changed(imgDst))
.pipe(imagemin())
.pipe(gulp.dest('build/images'));
});
gulp.task('default',['imagemin']); */

/*

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
 
gulp.task('images', function(){
  return gulp.src('src/images/PNG_transparency_demonstration_1.png')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images'))
});

*/