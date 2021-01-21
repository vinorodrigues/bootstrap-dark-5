'use strict'

const fs = require('fs');
const { exit } = require('process');

const header = [
  '// ===========================================================================',
  '// |||   This file is auto generated.  Do not Edit.                        |||',
  '// |||   Remember to run `npm run map-dark-vars` to re-map SCSS variables. |||',,
  '// ===========================================================================',
  '',
  '// !! Don\'t remove the next 2 lines',
  '// stylelint-disable',
  '// fusv-disable',
];

const footer = [
  '',
  '// !! Don\'t remove the next 2 lines',
  '// fusv-enable',
  '// stylelint-enable'
];

let fn = process.argv.slice(2)[0];
let to = process.argv.slice(3)[0] || '';  to = to.replace(/['"]+/g, '').trim();
let from = process.argv.slice(4)[0] || '';  from = from.replace(/['"]+/g, '').trim();

if (from == to) {
  console.error('// Error:', 'usage:  `node make-dark-map.js path-to-items-json map-from-sufix map-to-sufix`');
  exit(3);
}

let data = '';
try {
  if (fs.existsSync(fn)) {
    var rawData = fs.readFileSync(fn);
    data = JSON.parse(rawData);
  } else {
    console.error('// Error:', 'file not found (`' + fn + '`)');
    exit(2);
  }
} catch(err) {
  console.error('// Error:', err);
  exit(1);
}

header.forEach(line => {
  console.log(line);
});

var len = 0;
data.forEach(item => {
  let i = item.length;
  if (i > len) len = i;
});
len += from.length + 1;

data.forEach(item => {
  if (item.startsWith('//')) {
    let str = item.substring(2).trim();
    if (str.startsWith('-')) console.log();
    console.log( '// ' + str );
  } else {
    let str = item + from + ':';
    console.log( '$' + str.padEnd(len, ' ') + ' $' + item + to + ';' );
  }
});

footer.forEach(line => {
  console.log(line);
});

var currentDate = new Date();
console.log( '// Generated: ' + currentDate.toString() );

exit(0);
