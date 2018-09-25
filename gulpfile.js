// Gulp.js configuration
var gulp = require('gulp'),
//Need to edit the regular expression to account for a second dash
//So adding the line below for now
connect = require('gulp-connect-php'),
csssandbox = require("gulp-css-sandbox");
var cp = require('child_process');

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

let server = new connect();

gulp.task('connect-sync', ['js'], function() {
  connect.server({}, function (){
    plugins.browserSync({
      proxy: '127.0.0.1:8000',
      port: 8000,
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

  var jsbuild = gulp.src([folder.src + 'js/jquery.waypoints.min.js', folder.src + 'js/jquery.waypoints.min.js', folder.src + 'js/**/*'])
  .pipe(plugins.deporder())
  .pipe(plugins.concat('scripts.js'))
  // .pipe(plugins.stripDebug())
  .pipe(plugins.uglify())
  .on('error', onError)
  .pipe(plugins.rename( { suffix: '.min' } ))
  return jsbuild.pipe(gulp.dest(folder.build + 'js/'));

});

// CSS processing
gulp.task('css', ['images'], function() {

  var postCssOpts = [
  plugins.autoprefixer({ browsers: ['last 2 versions', '> 2%'] })
  // plugins.cssMqpacker,
  // plugins.cssnano
  ];

  return gulp.src(folder.src + 'scss/main.scss')
    .pipe(plugins.sass({
      outputStyle: 'nested',
      imagePath: 'images/',
      precision: 3,
      errLogToConsole: true
    }))
    .on('error', onError)
    .pipe(csssandbox('#sandbox'))
    .pipe(plugins.postcss(postCssOpts))
    // .pipe(plugins.rename( { suffix: '.min' } ))
    .pipe(gulp.dest(folder.build + 'css/'))
    .pipe(plugins.browserSync.reload({stream: true}));

});

gulp.task('disconnect', function() {
      server.closeServer();
    });

    gulp.task('runshell', function (cb) {
      cp.exec('cd includes/pages; ./convertphp.sh', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
      });
    })


    // gulp.task('runshell', function() {
    //   // In gulp 4, you can return a child process to signal task completion
    //   return cp.execFile('cd includes/pages/convertphp.sh');
    // });

//     gulp.task('runshell', function() {
//   return gulp.src('./**/**')
//     .pipe(exec('cd includes/pages; ./convertphp.sh'));
// });

gulp.watch(folder.src + 'images/**/*', ['images']);

// gulp.watch(folder.build + '**/**/*.php', ['runshell']).on('change', plugins.browserSync.reload);
gulp.watch(folder.build + '**/**/*.php', ['runshell']);
gulp.watch(folder.build + '**/**/*.html').on('change', plugins.browserSync.reload);
gulp.watch(folder.src + 'js/**/*', ['js']).on('change', plugins.browserSync.reload);
gulp.watch(folder.src + 'scss/**/*', ['css']);

gulp.task('default', ['connect-sync', 'disconnect']);

//add an error listener to where your errors might be thrown.
// .on('error', onError)
function onError(err) {
  console.log(err);
  this.emit('end');
}

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
