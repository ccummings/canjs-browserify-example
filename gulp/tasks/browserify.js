var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var config = require('../config').browserify;

gulp.task('browserify', function(callback) {

    var bundler = browserify({
        cache: {}, packageCache: {}, fullPaths: true,
        entries: config.src,
        debug: config.debug
    });

    var rebundle = function() {

        return bundler
            .bundle()
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source(config.outputName))
            .pipe(gulp.dest('./src'));
    };

    if(global.isWatching) {
        bundler = watchify(bundler);
        bundler.on('update', rebundle);
    }

    return rebundle();

});