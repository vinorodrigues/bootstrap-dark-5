'use strict'

const fs = require('fs');
const { exit } = require('process');

const header = [
  '// ===========================================================================',
  '// |||   This file is auto generated.  Do not Edit.                        |||',
  '// |||   Remember to run `npm run map-dark-vars` to re-map SCSS variables. |||',,
  '// ===========================================================================',
  '',
  '/* stylelint-disable */ // !! Don\'t remove this line',
  '// fusv-disable  // !! Don\'t remove this line',
  ''
];

const footer = [
  '',
  '// fusv-enable  // !! Don\'t remove this line',
  '/* stylelint-enable */  // !! Don\'t remove this line'
];

// function generate_map_file(filename, data, nm_sufx, vr_sufx, outPath = './') {
//   let content = '';
//   let fn = outPath + filename + '.scss';

//   header.forEach(line => {
//     content += line + '\n';
//   });

//   data.items.forEach(item => {
//     content += '$' + item + nm_sufx + ': $' + item + vr_sufx + ';\n';
//   });

//   footer.forEach(line => {
//     content += line + '\n';
//   });

//   fs.writeFile(fn, content, function(err) {
//     if (err) return console.error(err);
//     return console.log(fn + ' written.');
//   });

//   return true;
// }

// function generate_map_file(filename, data, nm_sufx, vr_sufx, outPath = './') {

//   let fn = outPath + filename + '.scss';
//   // console.info('fn', fn);

//   var writer = fs.createWriteStream(fn, { flags : 'w' });

//   let buffer = [];
//   header.forEach(line => { buffer.push(line); });
//   data.items.forEach(item => { buffer.push( '$' + item + nm_sufx + ': $' + item + vr_sufx + ';' ); });
//   footer.forEach(line => { buffer.push( line ); });
//   // console.log( JSON.stringify(buffer)  );

//   let i = buffer.length;
//   let p = 0;
//   write();

//   function write() {
//     let ok = true;
//     do {
//       i--;
//       if (i === 0) {
//         // Last time!
//         writer.write(buffer[p]);
//         console.log(buffer[p])
//       } else {
//         // See if we should continue, or wait.
//         // Don't pass the callback, because we're not done yet.
//         ok = writer.write(buffer[p]);
//         console.log(buffer[p])
//       }
//       p++;
//     } while (i > 0 && ok);
//     if (i > 0) {
//       writer.once('drain', write);
//     }
//   }

//   writer.close();

//   return true;
// }


// ____________________________________ code starts here

let fn = process.argv.slice(2)[0];
let from = process.argv.slice(3)[0] || '';
let to = process.argv.slice(4)[0] || '';

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

data.items.forEach(item => {
  if (!item.startsWith('//')) {
    console.log( '$' + item + from + ': $' + item + to + ';' );
  } else {
    var str = item.substring(2);
    console.log( '// $' + str + from );
  }
});

footer.forEach(line => {
  console.log(line);
});

var currentDate = new Date();
console.log( '\n// Generated: ' + currentDate.toString() );

exit(0);
