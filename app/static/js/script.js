/*import {export_time} from "./app/run.py";
//const test = export_time();
console.log(test);  */
const fs = require ("fs"); 
const saveAs = require('file-saver');

const filepath = "./app/backend/save_comments.txt"; 
fs.writeFile(filepath,"hello");


/*
const textToWrite = 'Hello, World!';
const blob = new Blob([textToWrite], { type: 'text/plain' });
saveAs(blob, 'example.txt');
*/

