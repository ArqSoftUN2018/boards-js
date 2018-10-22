'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BoardSchema = new Schema({
    owner_code: {
        type: Number,
        requited: 'El id del propietario es obligatorio'
    }, 
    group: {
        type: [Number]
    }, 
    name: {
        type: String,
        required: 'El nombre del tablero es obligario'
    },
    description: {
        type: String,
    },
    archived: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: String,
        default: String.now
    },
    updated_at: { 
        type: String, 
        default: String.now 
    },

});

module.exports = mongoose.model('Boards', BoardSchema);