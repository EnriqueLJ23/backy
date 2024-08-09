const mongoose = require('mongoose');

if (process.argv.length<3){
    console.log('give password as argument');
    process.exit(1)
}

mongoose.set('strictQuery',false);

mongoose.connect(url);

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
})

const Note = mongoose.model('Note', noteSchema);

const note = new Note({
    content: 'Fatima! my beloved...',
    important: true,
})

Note.find({}).then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
  })

/*
note.save().then(result => {
    console.log('note saved!');
    mongoose.connection.close();
})
*/