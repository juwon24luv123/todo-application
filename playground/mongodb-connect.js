// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
const yargs = require('yargs');



const argv = yargs.argv;
var command = process.argv[2];
console.log('Command: ', command);

// var obj = new ObjectID();
// console.log(obj);


// var user = {name: 'bankole', age: 24};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err){
       return console.log('Unable to connect to MoNgoDB server');
    }
    console.log('connected to MongoDB server');

    var db = client.db('TodoApp');

    // if (command === 'list') {
    //      db.collection('User').find().toArray().then((docs) =>{
    //     console.log('Teachers');
    //     console.log(JSON.stringify(docs, undefined, 2));

    // },(err) => {
    //     console.log('Unable to fetch teachers', err);
    // });
    // } 
    
    // else if(command === 'add') {
    //     db.collection('User').insertOne({
    //         name: argv.name,
    //         gender: argv.gender,
    //         age: argv.age
    //     }, (err) => {
    //         console.log('Unable to add Teacher', err)
    //     });
    // } else if (command === 'delete') {
    //     db.collection('User').findOneAndDelete({
    //         name: argv.name
    //     }).then((result) => {
    //         console.log(result);
    //     })
    // } else if (command === 'update') {
    //     db.collection('User').findOneAndUpdate({
    //         name: argv.name
    //     }, {
    //         $set: {
    //             name: argv.newName,
    //             gender: argv.newGender,
    //             age: argv.newAge
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then((result) => {
    //         console.log(result)
    //     });
    // }
    // else{
    //     console.log('Invalid')
    // }
    //     db.collection('User').deleteOne({}).then((result) => {
    //     console.log(result.result);
    // });

    // db.collection('User').insertMany([
    //     {name: 'idowu',
    //         age: 24,
    //         occupation: 'english teacher',
    //         location: 'Akure'},

    //         {name: 'ayo',
    //         age: 24,
    //         occupation: 'english teacher',
    //         location: 'Akure'},

    //         {name: 'nike',
    //         age: 24,
    //         occupation: 'english teacher',
    //         location: 'Akure'},

    //         {name: 'bayo',
    //         age: 24,
    //         occupation: 'english teacher',
    //         location: 'Akure'},

    //         {name: 'bola',
    //         age: 24,
    //         occupation: 'english teacher',
    //         location: 'Akure'},

    //            {name: 'bola',
    //         age: 24,
    //         occupation: 'english teacher',
    //         location: 'Akure'}
    // ], (err,result) => {
    //         if(err) {
    //             return console.log('Unable to insert user', err);
    //         }
    //         console.log(result.ops)
    //     });

    // client.close();
});