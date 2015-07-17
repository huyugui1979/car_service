/**
 * Created by fish on 15/7/6.
 */
var mongoose = require('mongoose');
var ActivitySchema = new mongoose.Schema(
    {
        user:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
        title:String,
        content: String,
        image:String
    });

mongoose.model('Activity', ActivitySchema);