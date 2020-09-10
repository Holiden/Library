'use strict';

const fractal = module.exports = require('@frctl/fractal').create();
const mandelbrot = require('@frctl/mandelbrot');

fractal.set('project.title', 'Holiden Library');

fractal.components.set('path', 'source/components');
fractal.components.set('label', 'Компоненты');
fractal.components.set('ext', '.html');
fractal.components.set('default.preview', '@preview');
fractal.components.set('default.collated', true);
fractal.components.set('default.status', null);

fractal.docs.set('path', 'source/docs');
fractal.docs.set('label', 'Документация');

const theme = mandelbrot({
    styles: ['default', '/themes/styles/theme.css'],
    scripts: ['default', '/themes/scripts/theme.js'],
    nav: ['docs', 'components'],
    panels: ['view', 'resources', 'notes'],
    lang: 'ru',
    favicon: '/themes/favicon.ico'
});

fractal.web.theme(theme);
fractal.web.set('builder.dest', 'build');
fractal.web.set('static.path', 'assets');
fractal.web.set('static.mount', 'themes');
fractal.web.set('server.sync', true);
fractal.web.set('server.syncOptions', {
    open: true,
    notify: false
});
