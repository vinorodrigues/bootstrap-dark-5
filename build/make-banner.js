'use strict';

const pkg = require('../package.json');
const year = new Date().getFullYear();
const fs = require('fs');
const { exit } = require('process');

function getBanner() {
  return `/*!
 * Bootstrap-Dark-5 v${pkg.version} (${pkg.homepage})
 * Copyright ${year != 2021 ? '2021-' : ''}${year} ${pkg.author}
 * Licensed under MIT (https://github.com/vinorodrigues/bootstrap-dark-5/blob/main/LICENSE.md)
 */` + "\n\n";
}

let fn = process.argv.slice(2)[0];

const fileReadData = fs.readFileSync(fn);
const fileWrite = fs.openSync(fn, 'w+')
const insert = new Buffer.from(getBanner());
fs.writeSync(fileWrite, insert, 0, insert.length, 0);
fs.writeSync(fileWrite, fileReadData, 0, fileReadData.length, insert.length);
fs.close(fileWrite, (err) => {
  if (err) throw err;
});
