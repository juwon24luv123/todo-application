// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);


// var user = {name: 'bankole', age: 24};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
       return console.log('Unable to connect to MoNgoDB server');
    }
    console.log('connected to MongoDB server');


    db.collection('User').insertMany([
        {name: 'idowu',
            age: 24,
            occupation: 'english teacher',
            location: 'Akure'},

            {name: 'ayo',
            age: 24,
            occupation: 'english teacher',
            location: 'Akure'},

            {name: 'nike',
            age: 24,
            occupation: 'english teacher',
            location: 'Akure'},

            {name: 'bayo',
            age: 24,
            occupation: 'english teacher',
            location: 'Akure'},

            {name: 'bola',
            age: 24,
            occupation: 'english teacher',
            location: 'Akure'},

               {name: 'bola',
            age: 24,
            occupation: 'english teacher',
            location: 'Akure'}
    ], (err,result) => {
            if(err) {
                return console.log('Unable to insert user', err);
            }
            console.log(result.ops)
        });



//     var User = argv.command;
//     console.log('command');
   
//    console.log('Command: ', User);
   
//     if (User === 'add') {
//         console.log('Adding new note');
//     } else if (User === 'list') {
//         console.log('Listing all notes');
//     } else if (User === 'read') {
//         console.log('reading note');
//     } else if (User === 'remove') {
//         console.log('Removing note');
//     } else {
//         console.log('User not recognized');
//     }


    db.close();
});