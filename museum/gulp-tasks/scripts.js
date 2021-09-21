module.exports = function(gulp, options, plugins, webpackconfig) {

	//

	return function (cd) {
		gulp.src([
			'./src/assets/js/index.js'
		])
			.pipe(plugins.plumber())
			.pipe(plugins.babel({
				presets: ['@babel/preset-env']
			}))
			.pipe(plugins.webpackStream(webpackconfig))
			.pipe(plugins.plumber.stop())
			// .pipe(gulp.dest(options.path.build.js))
			.pipe(plugins.uglify())
			.pipe(plugins.rename({
				basename: "app",
				suffix: '.min',
			}))
			.pipe(gulp.dest(options.path.build.js));

		// gulp.src([
		// 	'./src/assets/js/uikit.js'
		// ])
		// 	.pipe(plugins.plumber())
		// 	.pipe(plugins.babel({
		// 		presets: ['@babel/preset-env']
		// 	}))
		// 	.pipe(plugins.webpackStream(webpackconfig))
		// 	.pipe(plugins.plumber.stop())
		// 	// .pipe(gulp.dest(options.path.build.js))
		// 	// .pipe(plugins.uglify())
		// 	.pipe(plugins.rename({
		// 		basename: "uikit",
		// 		suffix: '.min',
		// 	}))
		// 	.pipe(gulp.dest(options.path.build.js));

		// cd();
	}
};
