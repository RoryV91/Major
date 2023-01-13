//==================
//   DEPENDENCIES  
//==================
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//==================
//   ISSUE SCHEMA  
//==================

const issueSchema = new Schema(
    {
        description: {
            type: String,
            required: true
        },
        work: {
            type: String,
        },
        priority: {
            type: Number
        },
        status: {
            type: Number
        },
        postedBy:{
            type: mongoose.ObjectId,
            ref: 'User'
        },
        assignedTo : {
            type: mongoose.ObjectId,
            ref: 'User'
        },
        closedBy: {
            type: mongoose.ObjectId,
            ref: 'User'
        }
    }
);

//==============================
//   MODEL USING ISSUE SCHEMA  
//==============================

const Issue = mongoose.model('Issue', issueSchema);

//===================
//   EXPORT MODEL  
//===================

module.exports = Issue;