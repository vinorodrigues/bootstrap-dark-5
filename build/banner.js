'use strict';

const pkg = require('../package.json');
const year = new Date().getFullYear();

function getBanner() {
  return `/*!
 * Bootstrap-Dark-5 v${pkg.version} (${pkg.homepage})
 * Copyright ${year != 2021 ? '2021-' : ''}${year} ${pkg.author}
 * Licensed under MIT (https://github.com/vinorodrigues/bootstrap-dark-5/blob/main/LICENSE.md)
 */` + "\n";
}

module.exports = getBanner;
