'use strict';

const mongoose = require('mongoose');

const EntrySchema = new mongoose.Schema({
    title: {
        type: String,
        default: ''
    },
    subTitle: {
        type: String,
        default: ''
    },
    url: {
        type: String,
        default: ''
    },
    author: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: 'https://via.placeholder.com/150'
    },
    creationDate: {
        type: Date,
        default: Date.now()
    },
    dateYear: {
        type: Number,
        default: ''
    },
    dateMonth: {
        type: Number,
        default: ''
    },
    dateDay: {
        type: Number,
        default: ''
    },
    text: {
        type: String,
        default: ''
    },
    tags: {
        type: Array,
        'default': []
    }
});

module.exports = mongoose.model('Entry', EntrySchema);
