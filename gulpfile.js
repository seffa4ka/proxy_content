var gulp    = require('gulp');
var browser = require('browser-sync');

gulp.task('default', initBrowser);

////////////////////////////////////////////////////////////

function initBrowser() {
  browser.init({
    proxy: {
      target: "http://vsegost.com/",
    },
    notify: false,
    open: false,
    ui: false,
    port: 8000
  });
}
