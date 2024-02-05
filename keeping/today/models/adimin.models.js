const { string, number } = require('joi');
const mongoose = require('mongoose');

const adminScema = new mongoose.Schema({
    fullNameVeterinary: {
        type: string,
        required:[ true,"frist name is required"],
        unique: true,
        trim: true,
    },
    email: {
        type: string,
        required:[ true,"email is required"],
        unique: true,
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
    ],
    },
    phoneNumber: {
        type: String,
        required:[ true,"phoneNumber is required"],
        unique: true,
    },
});