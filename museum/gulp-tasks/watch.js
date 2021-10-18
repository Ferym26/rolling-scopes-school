module.exports = function (gulp, options, plugins) {

	return function (cb) {

		const imagesPath = [
			'./src/blocks/**/*.{png,jpg,jpeg,gif,ico,svg,webp}',
			'./src/components/**/*.{png,jpg,jpeg,gif,ico,svg,webp}',
			'./src/partials/**/*.{png,jpg,jpeg,gif,ico,svg,webp}',
			'./src/mixins/**/*.{png,jpg,jpeg,gif,ico,svg,webp}',
			'./src/assets/images/**/*.{png,jpg,jpeg,gif,ico,svg,webp}'
		];

		// STYLES
		gulp.watch([
				options.path.watch.sass,
				'!src/assets/css/critical/critical.scss',
				'!src/assets/css/common/*.*',
			], gulp.series(gulp.parallel('sass-styles', 'sass-component')))

		gulp.watch([
			'./src/**/critical.{scss,sass}',
			'./src/assets/css/common/*.*'
		], gulp.series('sass-styles', 'sass-crit', 'pug'))

		// PUG
		global.watch = true;
		gulp.watch([options.path.watch.pug], gulp.series('pug-watch'))
			.on('all', function (event, filepath) {
				global.emittyChangedFile = filepath;
			});

		// JS
		// gulp.watch('./src/**/*.js', gulp.series('scripts', 'scripts-components')).on("change", plugins.browserSync.reload);
		gulp.watch('./src/assets/vendors/**/*.js', gulp.series('scripts-libs')).on('change', plugins.browserSync.reload);
		gulp.watch(options.path.build.js + '*.js').on('change', plugins.browserSync.reload);

		// HTML
		gulp.watch(options.path.build.html + '*.html').on('change', plugins.browserSync.reload);

		// PICTURES
		gulp.watch(imagesPath, gulp.series('imagemin'));
		gulp.watch([options.path.src.sprites + '**/*.svg'], gulp.series('svg'));

		// VIDEO
		gulp.watch(['./src/assets/video/*.*'], gulp.series('video'));

		// FONTS
		gulp.watch(['./src/assets/fonts/*.*'], gulp.series('fonts'));

		cb();
	};

};
