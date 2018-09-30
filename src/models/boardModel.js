'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BoardSchema = new Schema({
    _id: Schema.Types.ObjectId,
    _propietario_id: Schema.Types.ObjectId, 
    _grupo: Schema.Types.ObjectId,
    name: {
        type: String,
        required: 'El nombre del tablero es obligario'
    },
    archived: {
        type: Boolean,
        default: false;
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