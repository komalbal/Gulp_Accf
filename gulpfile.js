var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
const zip = require('gulp-zip');

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

gulp.task('zip',['imagemin' , 'uglify'], function(){
    gulp.src('src/*')
        .pipe(zip('myapp.zip'))
        .pipe(gulp.dest('dist'))
});

gulp.task('default', ['zip']);

