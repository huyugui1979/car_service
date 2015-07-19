/**
 * Created by fish on 15/7/9.
 */
var mongoose = require('mongoose');

var CaseSchema = mongoose.Schema({

    user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    name:String,
    title:String,
    content:[
        mongoose.model('Content').schema
    ]
    });
mongoose.model('Case',CaseSchema);