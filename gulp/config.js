module.exports = {
	browserify: {
		src: './src/app.js',
		debug: true,
		outputName: 'app.bundle.js'
	},
	less: {
		src: './src/**/*.less',
		outputName: 'app.bundle.css'
	},
	browserSync: {
		server: {
            baseDir: './',
            directory: true
        },
        files: [
            './src/**'
        ],
        open: false
	}
};