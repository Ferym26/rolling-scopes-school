'use strict';

module.exports = function (gulp, options, plugins) {

	return function (cb) {

		const pagesArr = [];

		new Promise(function (resolve, reject) {
			plugins.emitty.scan(global.emittyChangedFile).then(function () {
				gulp.src(options.path.src.pug, {read: true})
					.pipe(plugins.if(global.watch, plugins.emitty.filter(global.emittyChangedFile)))
					.pipe(plugins.pug({
						pretty: '\t',
						plugins: [ plugins.pugIncludeGlob() ],
					}))
					.on('error', plugins.notify.onError({
						title: 'PUG error 1',
						message: '<%= error.message %>'
					}))
					.pipe(plugins.debug({title: "Emitty: "}))
					.pipe(plugins.inlinesource())
					// .pipe(plugins.tap(file => {
					// 	const fileInputPath = file.path;
					// 	const fileName = plugins.path.basename(fileInputPath).replace('.html', '');
					// 	pagesArr.push(fileName)
					// }))
					.pipe(gulp.dest(options.path.build.html))
					// .on('end', function () {
					// 	const pageArrString = '["' + pagesArr.join('", "') + '"]';
					// 	plugins.fs.writeFileSync('./src/components/pages-viget/pagesArr.pug', "- var pagesArr = " + pageArrString)
					// })
					.on('error', reject);
			});
		});

		cb();
	};
};
