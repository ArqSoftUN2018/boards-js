'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BoardSchema = new Schema({
    propietario_id: {
        type: Number,
        requited: 'El id del propietario es obligatorio'
    }, 
    grupo: {
        type: [Number]
    }, 
    name: {
        type: String,
        required: 'El nombre del tablero es obligario'
    },
    archived: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: { 
        type: Date, 
        default: Date.now 
    },

});

module.exports = mongoose.model('Boards', BoardSchema);