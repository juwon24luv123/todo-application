const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// Todo.remove().then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove().then((result) => {
//     console.log(result);
// });

// Todo.findByIdAndRemove({_id: '5a60c1f5eddd5c48f5bae776r'}).then((todo) => {
//     console.log(todo);
// }, (e) => {
//     console.log(e);
// });


