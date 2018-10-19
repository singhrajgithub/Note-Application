// console.log('starting notes.js app')
const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0)
  {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
return fetchNotes();
};

  var getNote = (title) => {
  var notes=fetchNotes();
  var filterNote= notes.filter((note) => note.title === title);
  console.log((typeof filterNote))
  return filterNote[0];
};

var remove =(title) => {

var notes= fetchNotes();
var filterNotes = notes.filter ( (note) => note.title !== title);
saveNotes(filterNotes)

  };

  var logNote = (note) => {
    debugger;
    console.log(`Title is : ${note.title}`)
    console.log(`Body  is : ${note.body}`)}

module.exports =
{
//addNote : addNote
// Remember in ES 6 if you have a property whose name is identical to the value which is a variable you can simply remove the value variable and the column perfect.
  addNote , getAll , getNote , remove , fetchNotes ,logNote
};
