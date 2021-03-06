const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');



var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {authenticate} = require('./middleware/authenticate');


var app = express();

const port = process.env.PORT || 4000;

app.use(bodyParser.json());

app.post('/todos', (req, res) =>{
    var todo = new Todo({
        text:req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    })
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

// GET / TODO/12345

app.get('/todos/:id', (req, res) => {
    // res.send(req.params);
    var id = req.params.id;

    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    
    Todo.findById(id).then((todo) => {
        if(!todo) {
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });
});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)) {
        return res.status(404).send(); 
    }
    Todo.findByIdAndRemove(id).then((todo) => {
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });
});
// use to update our todo
app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    if (_.isBoolean(body.completed) &&  body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if (!todo) {
           return res.status(404).send();
        }
        res.send({todo}); 
    }).catch((e) => {
        res.status(400).send();
    })
});

app.post('/users', (req, res) =>{
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);
            // console.log(user);
    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).send(user);
    }).catch((e) => {
        // console.log(e);
        res.status(400).send(e); 

    })
});

app.get('/users/me', authenticate, (req, res) => {
    res.send(req.user);
});



// POST /USERS/LOGIN {EMAIL, PASSWORD} 
app.post('/users/login', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    User.findByCredentials(body.email, body.password).then((user) => {
        return user.generateAuthToken().then((token) => {
            res.header('x-auth', token).send(user);
        })
    }).catch((e) => {
        res.status(400).send();
    });
});


app.delete('/users/me/token', authenticate, (req, res) => {
    req.user.removeToken(req.token).then(() => {
        res.status(200).send();
    }, () => {
        res.status(400).send();
    });   
});






if (!module.parent) {
    app.listen(port,() => {
        console.log(`Started on port ${port}`);
    });
}
// app.listen(port,() => {
    // console.log(`Started on port ${port}`);
// });

module.exports = {app};










// var User = new User ({
//     email: '    juwon24luv1@gmail.com     '
// });

// User.save().then((doc) =>{
//     console.log('User saved', doc);
// }, (e) =>{
//     console.log('Unable to save user', e);
// });

// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('saved todo', doc);
// }, (e) => {
//     console.log('Unable to save todo')
// });


// var classTodo = new Todo({
//     text: '   edit this video   '
//     // text: 'mongodb is interesting',
//     // completed: true,
//     // completedAt: 123
// });

// classTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save todo', e);
// });


