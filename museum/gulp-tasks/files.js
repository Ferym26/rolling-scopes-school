module.exports = function(gulp, options, plugins) {

	return function (cb) {
		gulp.src('./src/assets/files/*.*')
			.pipe(gulp.dest(options.path.build.files));

		cb();
	}

};
