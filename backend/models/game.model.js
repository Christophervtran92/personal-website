//const dateRegex = /^[0-1][0-9]\/[0-3][0-9]\/[1-2][0-9][0-9][0-9]$/; //Regex for format mm/dd/yyyy
const releaseDateRegex = /(^[0-1][0-9]\/[0-3][0-9]\/[1-2][0-9][0-9][0-9]$)|(^TBA$)/;
const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    system: {
        type: String,
        required: true
    },
    release_date: {
        type: String,
        required: true,
        validate: releaseDateRegex
    },
    status: {
        type: String,
        enum: ["Planned", "Upcoming", "In Progress", "Limbo", "Completed", "Interested"],
        required: true
    },
    yr_completed: {
        type: Number,
        required: false,
        min: 1992
    }
})

module.exports = mongoose.model('games', gameSchema);