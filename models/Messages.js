/**
 * Created by fish on 15/7/9.
 */
var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema(
    {
        user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
        content:String,
        messageTime:Date
    });
mongoose.model('Message', MessageSchema);