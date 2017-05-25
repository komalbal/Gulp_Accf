var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var del = require('del');
var jshint = require('gulp-jshint');
var webReporter = require('gulp-hint-web-reporter');

var options = {
    logsPath: "Reports/",
    hinters: ["jshint"],
    filenames: {
        jshint: "jshint-report.html"
    },
    createMissingFolders: true
};

gulp.task('imagemin', function () {
	console.log('in imagemin');
    return gulp.src('src/images/*.png')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

gulp.task('uglify' , function() {
	console.log('minifying the code');
	return gulp.src('src/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist'));	
});

gulp.task('lint', function() {
  return gulp.src('src/*.js')
    .pipe(jshint())
    .pipe(webReporter(options));
});

gulp.task('clean:dist',['imagemin' , 'uglify'], function() {
  return del.sync('dist');
})

gulp.task('default', ['lint','clean:dist']);

