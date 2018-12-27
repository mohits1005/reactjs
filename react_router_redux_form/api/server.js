require('./config/config.js')

const _ = require('lodash')
const express = require('express')
const bodyParser = require('body-parser')
var { mongoose } = require('./db/mongoose');

var { Todo } = require('./models/todo');
const { ObjectID } = require('mongodb');
var app = express();
const port = process.env.PORT;
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
app.use(bodyParser.json());

//creating todos
app.post('/todos', (req, res) => {
    // console.log(req.body)
    var todo = new Todo({
        title: req.body.title,
        categories: req.body.categories,
        content: req.body.content
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

//fetch todos
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos });
    }, (e) => {
        console.log('Todo not found');
        res.status(400).send(e);
    });
});

//fetch specific todo
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        res.status(404).send();
    }
    Todo.findById(id).then((todo) => {
        if (!todo) {
            res.status(404).send();
        }
        res.send({ todo });
    }).catch((e) => res.status(400).send());
});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        res.status(404).send();
    }
    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            res.status(404).send();
        }
        res.send({ todo });
    }).catch((e) => res.status(400).send());
});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['title', 'categories','content'])
    if (!ObjectID.isValid(id)) {
        res.status(404).send();
    }
    Todo.findByIdAndUpdate(id,
        {
            $set: body
        },
        {
            new: true
        }).then((todo) => {
            if (!todo) {
                return res.status(400).send()
            }
            res.send({ todo });
        }).catch((e) => res.status(400).send());
});


app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = {
    app
};
