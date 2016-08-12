var gulp = require('gulp');
var gutil = require('gulp-util');
var inject = require('gulp-inject');
var wiredep = require('wiredep').stream;
var connect = require('gulp-connect');
var open = require('gulp-open');

gulp.task('sayHello', function(){
	gutil.log('Hello World!');
});

gulp.task('inject', function(){
	var sources = gulp.src(['./src/css/**/*.css', './src/js/**/*.js']);

	gulp.src('./src/index.html')
		.pipe(wiredep())
		.pipe(inject(sources, { relative: true}))
		.pipe(gulp.dest('./src'));
});

gulp.task('connect', function(){
	connect.server({
		root: './src',
		livereload: true
	});
});

var jsSources = ['src/js/**/*.js'],
	cssSources = ['src/css/**/*.css'],
	htmlSources = ['**/*.html'];

gulp.task('watch', function(){
	gulp.watch(jsSources, ['js']);
	gulp.watch(cssSources, ['css']);
	gulp.watch(htmlSources, ['html']);
})

gulp.task('js', function() {
    gulp.src(jsSources)
        .pipe(connect.reload());
});

gulp.task('html', function() {
    gulp.src(htmlSources)
        .pipe(connect.reload());
});

gulp.task('css', function() {
    gulp.src(cssSources)
        .pipe(connect.reload());
});

gulp.task('app', function(){
    var options = {
        uri: 'http://localhost:8080',
        app: 'chrome'
    };
    gulp.src('./src/index.html')
        .pipe(open(options));
});

gulp.task('serve', ['connect' , 'watch' , 'inject', 'app']);