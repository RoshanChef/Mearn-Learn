const fs = require('fs');

//write file
// fs.writeFileSync("read.txt", "Notedown the teams and condition of the town is the fair enough");

// appendfile
// fs.appendFileSync('read.txt', 'Coming Back to home town .. ')

// // readfile
// let data = fs.readFileSync('read.txt');
// console.log(data.toString());

// // renameFile
// fs.renameSync('read.txt', 'reading.txt')


console.log(__dirname);

const path = require('path');
console.log(path.join(__dirname, '../'));