var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    // text: {
    //     type: String,
    //     required: true,
    //     minlength: 1,
    //     trim: true
    // },
    // completed: {
    //     type: Boolean,
    //     default: false
    // },
    // completedAt: {
    //     type: Number,
    //     default: null
    // }
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    categories: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    content: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

module.exports = {
    Todo
};
