require('./scss/index.scss');

// https://webpack.github.io/docs/hot-module-replacement.html
if (module.hot) {
	module.hot.accept();
}