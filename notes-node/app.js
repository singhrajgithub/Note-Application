// console.log("Starting app");
const fs =require('fs');
const _= require('D:\\NODEJS\\notes-node\\node_modules\\lodash');
const yargs=require('yargs')
const notes= require('D:\\NODEJS\\notes-node\\notes.js')
const argv= yargs.command('add','Add a new Note' , { title : { describe  : 'Title of Note', demand :false ,alias : 't' }}).argv;


//var command = process.argv[2];
var command = argv._[0]
// console.log('Command is ', command);
// console.log('Process', process.argv)
// console.log('Yargs', yargs.argv)
//console.log(process.argv)
if (command === 'add')
{
var note=notes.addNote(argv.title, argv.body)
//console.log('Adding New Note');
if (note)
{
  notes.logNote(note)
}
else
{console.log("Note Not Taken")}
}
else if (command === 'list')
{ var allNote= notes.getAll();
console.log(`Printing  ${allNote.length} notes .`)
allNote.forEach((note) => {
notes.logNote(note);
})
}
else if (command === 'read')
{
  var note= notes.getNote(argv.title)
  if (note)
  {
    console.log("found Note ---")
    notes.logNote(note)
}
  else
  {console.log("Note Not Found")}

}
else if (command === 'remove')
{ notes.remove(argv.title)
  //console.log('Removing Note');
}
else {console.log('Command Not recognized');}
