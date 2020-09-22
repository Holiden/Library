'use strict';

const { src, dest, series, parallel } = require('gulp');
const del = require('del');
const plumber = require('gulp-plumber');
const gulpIf = require('gulp-if');
const { argv } = require('yargs');
const rename = require('gulp-rename');
const replace = require('gulp-replace');

const htmlMin = require('gulp-htmlmin');

const postCSS = require('gulp-postcss');

const babel = require('gulp-babel');
const terser = require('gulp-terser');
const rollup = require('rollup-stream');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

const paths = {
  views: {
    source: './source/components/_preview/preview.html',
    dev: './source/components/_preview/',
    build: './build/components/preview/'
  },
  scripts: {
    source: './source/components/_preview/preview.js',
    dev: './source/components/_preview/',
    build: './build/components/raw/preview'
  },
  minification: {
    views: './build/**/*.html',
    styles: './build/**/*.css',
    scripts: './build/**/*.js',
    dest: './build/'
  }
};

const views = () => {
  return src(paths.views.source)
    .pipe(plumber())
    .pipe(gulpIf(argv.dev, replace(/_*preview.js/g, '_preview.js')))
    .pipe(gulpIf(argv.build, replace(/_*preview.js/g, 'preview.js')))
    .pipe(gulpIf(argv.dev, dest(paths.views.dev)))
    .pipe(gulpIf(argv.build, dest(paths.views.build)));
}

exports.views = views;

const scripts = () => {
  return rollup({ input: './source/components/_preview/preview.js', format: 'es' })
    .pipe(plumber())
    .pipe(source('preview.js'))
    .pipe(buffer())
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(gulpIf(argv.dev, rename({ prefix: '_' })))
    .pipe(gulpIf(argv.dev, dest(paths.scripts.dev)))
    .pipe(gulpIf(argv.build, dest(paths.scripts.build)));
}

exports.scripts = scripts;

const remove = () => {
  return del('source/components/_preview/_preview.js');
}

exports.remove = remove;

const minificationViews = () => {
  return src(paths.minification.views)
    .pipe(plumber())
    .pipe(htmlMin({ collapseWhitespace: true, removeComments: true }))
    .pipe(dest(paths.minification.dest));
}

exports.minificationViews = minificationViews;

const minificationStyles = () => {
  return src(paths.minification.styles)
    .pipe(plumber())
    .pipe(postCSS([
      require('postcss-import'),
      require('autoprefixer'),
      require('cssnano')
    ]))
    .pipe(dest(paths.minification.dest));
}

exports.minificationStyles = minificationStyles;

const minificationScripts = () => {
  return src(paths.minification.scripts)
    .pipe(plumber())
    .pipe(terser())
    .pipe(dest(paths.minification.dest));
}

exports.minificationScripts = minificationScripts;

exports.default = series(remove, views, scripts);
exports.minification = parallel(minificationViews, minificationStyles, minificationScripts);
