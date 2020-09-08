const { src, dest, series } = require('gulp');
const del = require('del');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const fileInclude = require('gulp-file-include');
const gulpIf = require('gulp-if');
const { argv } = require('yargs');

const paths = {
    views: {
        source: 'source/components/_preview/preview.html',
        dev: 'source/components/_preview/',
        build: 'build/components/preview/'
    },
    scripts: {
        source: 'source/components/_preview/preview.js',
        dev: 'source/components/_preview/',
        build: 'build/components/raw/preview'
    }
};

const views = () => {
    return src(paths.views.source)
        .pipe(gulpIf(argv.dev, replace(/_*preview.js/g, '_preview.js')))
        .pipe(gulpIf(argv.build, replace(/_*preview.js/g, 'preview.js')))
        .pipe(gulpIf(argv.dev, dest(paths.views.dev)))
        .pipe(gulpIf(argv.build, dest(paths.views.build)));
}

exports.views = views;

const scripts = () => {
    return src(paths.scripts.source)
        .pipe(fileInclude({ prefix: '//=' }))
        .pipe(gulpIf(argv.dev, rename({ prefix: '_' })))
        .pipe(gulpIf(argv.dev, dest(paths.scripts.dev)))
        .pipe(gulpIf(argv.build, dest(paths.scripts.build)));
}

exports.scripts = scripts;

const remove = () => {
    return del('source/components/_preview/_preview.js');
}

exports.remove = remove;

exports.default = series(remove, scripts, views);
