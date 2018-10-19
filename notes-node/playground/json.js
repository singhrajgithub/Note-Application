// // var obj =  { name : "raj" };
// // // JSON.stringify function takes object and returns stringified version of that object ..
// // var stringObj = JSON.stringify(obj);
// // console.log(typeof stringObj);
// // console.log(stringObj);
// var personString  = '{ "Name" : "Raj Singh" , "Age" : "26" , "School" : "DAV Public School"}';
// var person= JSON.parse(personString);
// console.log(typeof person);
// console.log(person);


const fs = require('fs')
var originalNote =  { title  : 'some title' , body : 'some body'};
var originalNoteString = JSON.stringify(originalNote)
fs.writeFileSync('notes.json', originalNoteString);
var noteString= fs.readFileSync('notes.json',{ encoding: 'utf-8' });
console.log(typeof nodeString);
console.log(noteString)
var note = JSON.parse(noteString);
console.log(typeof note)
console.log(note.title)
