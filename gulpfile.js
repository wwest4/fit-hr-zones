var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var stringify = require('stringify');
var jshint = require('gulp-jshint');

const bundle_dir = './site';
const bundle_file  = 'index.js';
const stringify_opts = { 
	appliesTo: {
		includeExtensions: ['html']
	}
}
const jshint_reporter = 'default';

gulp.task('default', ['jshint', 'index.js'], function() {
});

gulp.task('index.js', [], function() {
	b = browserify()
		.transform(stringify, stringify_opts)
		.transform('browserify-css', { autoInject: true })
		.add('./js/main.js')
		.bundle()
		.pipe(source(bundle_file))
		.pipe(gulp.dest(bundle_dir));
});

gulp.task('jshint', function() {
	return gulp.src('./js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter(jshint_reporter));
});
