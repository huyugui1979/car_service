/**
 * Created by yuguihu on 15/7/19.
 */
var mongoose = require('mongoose');

var ContentSchema = new mongoose.Schema(
    {
        desc:String,
        type:String,
        file:String
    });
mongoose.model('Content', ContentSchema);