const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const rename = require('gulp-rename');
const del = require('del');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const replace = require('gulp-replace');
const imagemin = require('gulp-imagemin');
const plumber = require('gulp-plumber');

const paths = {
  html: {
    src: './app/**/*.html',
    dest: './build'
  },
  styles: {
    src: './app/scss/**/*.scss',
    dest: './build/assets/css'
  },
  csslibs: {
    src: [
        './node_modules/slick-carousel/slick/slick.css',
      ],
    dest: './app/scss/base'
  },
  scripts: {
    src: './app/js/*.js',
    dest: './build/assets/js'
  },
  jslibs: {
    src: [
      './app/js/jslibs/**/*.js',
      'node_modules/slick-carousel/slick/slick.js'
    ],
    dest: './build/assets/js'
  },
  images: {
    src: './app/images/**/*',
    dest: './build/assets/images'
  },
  favicon: {
    src: './app/favicon.ico',
    dest: './build'
  },
  fonts: {
    src: './app/fonts/*',
    dest: './build/fonts'
  }
};

const clean = () => del(['./build']);

// Cache busting to prevent browser caching issues
const curTime = new Date().getTime();
const cacheBust = () =>
  gulp
    .src(paths.html.src)
    .pipe(plumber())
    .pipe(replace(/cb=\d+/g, 'cb=' + curTime))
    .pipe(gulp.dest(paths.html.dest));


// Copies all html files
const html =() =>
  gulp
    .src(paths.html.src)
    .pipe(plumber())
    .pipe(gulp.dest(paths.html.dest));

// Convert scss to css, auto-prefix and rename into styles.min.css
const styles = () =>
  gulp
    .src(paths.styles.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(
      rename({
        basename: 'styles',
        suffix: '.min'
      })
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());

const csslibs = () => 
  gulp
    .src(paths.csslibs.src)
    .pipe(concat('_csslibs.scss'))
    .pipe(gulp.dest(paths.csslibs.dest));

// Minify all javascript files and concat them into a single app.min.js
const scripts = () =>
  gulp
    .src(paths.scripts.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ['@babel/preset-env']
      })
    )
    .pipe(terser())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.scripts.dest));

// Minify all javascript libs and concat them into a single jslibs.min.js
const jslibs = () =>
  gulp
    .src(paths.jslibs.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ['@babel/preset-env']
      })
    )
    .pipe(terser())
    .pipe(concat('jslibs.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.jslibs.dest));

// Copy and minify images
const images = () =>
  gulp
    .src(paths.images.src)
    .pipe(plumber())
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest));

// Copy the favicon
const favicon = () =>
  gulp
    .src(paths.favicon.src)
    .pipe(plumber())
    .pipe(gulp.dest(paths.favicon.dest));

// Copy the fonts
const fonts = () =>
  gulp
    .src(paths.fonts.src)
    .pipe(plumber())
    .pipe(gulp.dest(paths.fonts.dest));

// Watches all .scss, .js and .html changes and executes the corresponding task
function watchFiles() {
  browserSync.init({
    server: {
      baseDir: './build'
    },
    notify: false
  });

  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.jslibs.src, jslibs).on('change', browserSync.reload);
  gulp.watch(paths.favicon.src, favicon).on('change', browserSync.reload);
  gulp.watch(paths.fonts.src, fonts).on('change', browserSync.reload);
  gulp.watch(paths.scripts.src, scripts).on('change', browserSync.reload);
  gulp.watch(paths.images.src, images).on('change', browserSync.reload);
  gulp.watch('./app/*.html', html).on('change', browserSync.reload);
}

const build = gulp.series(
  clean,
  gulp.parallel(styles, csslibs, jslibs, scripts, images, favicon, fonts),
  cacheBust
);

const watch = gulp.series(build, watchFiles);

exports.clean = clean;
exports.styles = styles;
exports.csslibs = csslibs;
exports.scripts = scripts;
exports.jslibs = jslibs;
exports.images = images;
exports.favicon = favicon;
exports.fonts = fonts;
exports.watch = watch;
exports.build = build;
exports.default = build;
