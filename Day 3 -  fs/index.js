// 1.	Reading Files:
//  	Asynchronous:
const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

//      Synchronous:
const fs = require('fs');
const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);

// 2.	Writing Files:
//      Asynchronous:
const fs = require('fs');
fs.writeFile('example.txt', 'Hello, world!', (err) => {
  if (err) throw err;
  console.log('File has been saved!');
});
//      Synchronous:
const fs = require('fs');
fs.writeFileSync('example.txt', 'Hello, world!');
console.log('File has been saved!');

// 3.	Appending to Files:
//      Asynchronous:
const fs = require('fs');
fs.appendFile('example.txt', '\nAppended text', (err) => {
  if (err) throw err;
  console.log('Text has been appended!');
});
// Synchronous:
const fs = require('fs');
fs.appendFileSync('example.txt', '\nAppended text');
console.log('Text has been appended!');


// 4.	Deleting Files:
//     Asynchronous:
const fs = require('fs');
fs.unlink('example.txt', (err) => {
  if (err) throw err;
  console.log('File has been deleted!');
});

    // Synchronous:
const fs = require('fs');
fs.unlinkSync('example.txt');
console.log('File has been deleted!');
