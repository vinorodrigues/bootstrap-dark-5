'use strict';

const pkg = require('../package.json');
const bsd_ver = pkg.version;
// const bs_ver = pkg.dependencies.bootstrap.replace(/[^\d.-]/g, '');
const bs_ver = pkg.dependencies.bootstrap.replace(/[^\d.\-beta]/g, '');

module.exports = {
  files: 'dist/css/*.css',
  from: [
    '(https://vinorodrigues.github.io/bootstrap-dark-5/)',
    'Bootstrap v5.x.x'
  ],
  to: [
    `v${bsd_ver} (https://vinorodrigues.github.io/bootstrap-dark-5/)`,
    `Bootstrap v${bs_ver}`
  ]
}
