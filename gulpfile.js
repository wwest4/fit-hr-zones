var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var stringify = require('stringify');

const bundle_dir = './site';
const bundle_file  = 'index.js';
const stringify_opts = { 
	appliesTo: {
		includeExtensions: ['html']
	}
}

gulp.task('default', ['index.js'], function() {
});

gulp.task('index.js', [], function() {
	b = browserify()
		.transform(stringify, stringify_opts)
		.add('./js/main.js')
		.bundle()
		.pipe(source(bundle_file))
		.pipe(gulp.dest(bundle_dir));
});
