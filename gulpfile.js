const _ = require('lodash');
const gulp = require('gulp');
const watchify = require('watchify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const gutil = require('gulp-util');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const notify = require('gulp-notify');

const server = require('./server/');

/*
 *  JS helpers
 */

const getJsBundler = () => {
  const myOpts = {
    entries: ['./src/index.js'],
    debug: true,
    extensions: ['.js', '.jsx'],
  };
  const bwsfyOpts = Object.assign({}, watchify.args, myOpts);
  const bwsfy = browserify(bwsfyOpts)
    .transform('babelify');
  const bundler = watchify(bwsfy);
  bundler.on('log', gutil.log);
  return bundler;
};

const getJsPipes = () => [
  source('bundle.js'),
  buffer(),
  sourcemaps.init({loadMaps: true}),
  sourcemaps.write('./'),
  gulp.dest('./server/public/'),
];

const getJsBundleFn = (bundler) => function bundleJs(done) {
  const pipes = getJsPipes();
  let pipeline = bundler.bundle().on('error', notify.onError({
    message: 'Error: <%= error.message %>',
    title: 'Bundle Error',
  }));
  pipeline = pipes.reduce((pipeline, pipe) => pipeline.pipe(pipe), pipeline);
  if (done) pipeline.on('end', done);
};

/*
 *  Dev tasks
 */

function watchJs(done) {
  const bundler = getJsBundler();
  const bundle = getJsBundleFn(bundler);
  bundler.on('update', bundle.bind(null, null));
  bundle(done);
}

function startServer() {
  server.start();
}

/*
 *  Exported tasks
 */

exports.dev = gulp.parallel(startServer, watchJs);
