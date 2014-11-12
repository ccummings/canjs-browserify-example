var gulp = require('gulp');
var less = require('gulp-less');
var gutil = require('gulp-util');
var merge = require('merge-stream');
var concat = require('gulp-concat');
var config = require('../config').less;

gulp.task('less', function() {

	return gulp.src(config.src)
		.pipe(less())
		.on('error', gutil.log.bind(gutil, 'LESS Error'))
		.pipe(concat(config.outputName))
		.pipe(gulp.dest('./src'));

});