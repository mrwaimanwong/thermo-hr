// Gulp.js configuration
var gulp = require('gulp'),
//Need to edit the regular expression to account for a second dash
//So adding the line below for now
connect = require('gulp-connect-php');

plugins = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*', '*'],
  replaceString: /\bgulp[\-.]/,
      lazy: true,
      camelize: true
    }),

  // folders
  folder = {
    src: 'dev/',
    build: './'
  };

gulp.task('connect-sync', ['js'], function() {
  connect.server({}, function (){
    plugins.browserSync({
      proxy: '127.0.0.1:8000',
      notify: false
    });
  });
  });

// gulp.task('browser-sync', ['css'], function() {
//     plugins.browserSync.init({
//         proxy: "http://thermo.local/",
//         // host: 'stracherlaw.waimanwong.local',
//         // open: 'external',
//         notify: false,
//         injectChanges: true
//
//     });
// });

// image processing
gulp.task('images', function() {
  var out = folder.build + 'images/';
  return gulp.src(folder.src + 'images/**/*')
    .pipe(plugins.newer(out))
    .pipe(plugins.imagemin({ optimizationLevel: 5 }))
    .pipe(gulp.dest(out));
});

// JavaScript processing
gulp.task('js', function() {

  var jsbuild = gulp.src(folder.src + 'js/**/*')
  .pipe(plugins.deporder())
  .pipe(plugins.concat('scripts.js'))
  // .pipe(plugins.stripDebug())
  .pipe(plugins.uglify())
  .pipe(plugins.rename( { suffix: '.min' } ))
  return jsbuild.pipe(gulp.dest(folder.build + 'js/'));

});

// CSS processing
gulp.task('css', ['images'], function() {

  var postCssOpts = [
  plugins.autoprefixer({ browsers: ['last 2 versions', '> 2%'] }),
  // plugins.cssMqpacker,
  plugins.cssnano
  ];

  return gulp.src(folder.src + 'scss/main.scss')
    .pipe(plugins.sass({
      outputStyle: 'nested',
      imagePath: 'images/',
      precision: 3,
      errLogToConsole: true
    }))
    .pipe(plugins.postcss(postCssOpts))
    .pipe(plugins.rename( { suffix: '.min' } ))
    .pipe(gulp.dest(folder.build + 'css/'))
    .pipe(plugins.browserSync.reload({stream: true}));

});

gulp.watch(folder.src + 'images/**/*', ['images']);
gulp.watch(folder.build + '**/*.html').on('change', plugins.browserSync.reload);
gulp.watch(folder.build + '**/*.php').on('change', plugins.browserSync.reload);
gulp.watch(folder.src + 'js/**/*', ['js']).on('change', plugins.browserSync.reload);
gulp.watch(folder.src + 'scss/**/*', ['css']);

gulp.task('default', ['connect-sync']);

// watch for changes
// gulp.task('watch', ['browser-sync'], function() {
//
//   // image changes
//   gulp.watch(folder.src + 'images/**/*', ['images']);
//
//   // html changes
//   gulp.watch(folder.build + '**/*.html').on('change', plugins.browserSync.reload);
//
//   // php changes
//   gulp.watch(folder.build + '**/*.php').on('change', plugins.browserSync.reload);
//
//   // javascript changes
//   gulp.watch(folder.src + 'js/**/*', ['js']).on('change', plugins.browserSync.reload);
//
//   // css changes
//   gulp.watch(folder.src + 'scss/**/*', ['css']);
//
// });

// default task
// gulp.task('default', ['run', 'watch']);