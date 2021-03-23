'use strict';

const pkg = require('../package.json');

module.exports = {
  files: 'dist/css/*.css',
  from: '(https://vinorodrigues.github.io/bootstrap-dark-5/)',
  to: `v${pkg.version} (https://vinorodrigues.github.io/bootstrap-dark-5/)`
}
