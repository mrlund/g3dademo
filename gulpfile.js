var gulp = require('gulp'),
    gulpWatch = require('gulp-watch'),
    del = require('del'),
    runSequence = require('run-sequence'),
    argv = process.argv;


/**
 * Ionic hooks
 * Add ':before' or ':after' to any Ionic project command name to run the specified
 * tasks before or after the command.
 */
gulp.task('serve:before', ['watch']);
gulp.task('emulate:before', ['build']);
gulp.task('deploy:before', ['build']);

gulp.task('build:before', ['build']);

// we want to 'watch' when livereloading
var shouldWatch = argv.indexOf('-l') > -1 || argv.indexOf('--livereload') > -1;
gulp.task('run:before', [shouldWatch ? 'watch' : 'build']);

/**
 * Ionic Gulp tasks, for more information on each see
 * https://github.com/driftyco/ionic-gulp-tasks
 *
 * Using these will allow you to stay up to date if the default Ionic 2 build
 * changes, but you are of course welcome (and encouraged) to customize your
 * build however you see fit.
 */
var buildBrowserify = require('ionic-gulp-browserify-typescript');
var buildSass = require('ionic-gulp-sass-build');
var copyHTML = require('ionic-gulp-html-copy');
var copyFonts = require('ionic-gulp-fonts-copy');
var copyScripts = require('ionic-gulp-scripts-copy');
var gulpConcat = require('gulp-concat');

var extLibsPathsArray = [
    'node_modules/jquery/dist/jquery.js',
    'node_modules/jqcloud2/dist/jqcloud.js'
];

var extLibsCssFilesPathsArray = [
    'node_modules/jqcloud2/dist/jqcloud.css'
];

var copyContentFiles = function(options) {
  options.src = 'app/content/**/*.+(json|mp3|js|png|jpg|xlsx)';
  options.dest = 'www/build/content';

  return gulp.src(options.src)
    .pipe(gulp.dest(options.dest));
};

var isRelease = argv.indexOf('--release') > -1;

gulp.task('extLibsJS', function() {
   return gulp.src(extLibsPathsArray)
         .pipe(gulpConcat('external-libaries.js'))
     .pipe(gulp.dest('www/build/js'));
 });

gulp.task('extLibsCss', function() {
    return gulp.src(extLibsCssFilesPathsArray)
        .pipe(gulpConcat('external-libaries.css'))
        .pipe(gulp.dest('www/build/css'));
});


gulp.task('watch', ['clean'], function(done){
  runSequence(
    ['sass', 'html', 'fonts', 'scripts', 'extLibsJS', 'extLibsCss', 'content'],
    function(){
      gulpWatch('app/**/*.scss', function(){ gulp.start('sass'); });
      gulpWatch('app/**/*.html', function(){ gulp.start('html'); });
      gulpWatch('app/content/**/*.*', function(){ gulp.start('content'); });
      buildBrowserify({ watch: true }).on('end', done);
    }
  );
});

gulp.task('build', ['clean'], function(done){
  runSequence(
    ['sass', 'html', 'fonts', 'scripts', 'extLibsJS', 'extLibsCSS', 'content'],
    function(){
      buildBrowserify({
        minify: isRelease,
        browserifyOptions: {
          debug: !isRelease
        },
        uglifyOptions: {
          mangle: false
        }
      }).on('end', done);
    }
  );
});

gulp.task('sass', buildSass);
gulp.task('html', copyHTML);
gulp.task('fonts', copyFonts);
gulp.task('scripts', copyScripts);
gulp.task('content', copyContentFiles);
gulp.task('clean', function(){
  return del('www/build');
});