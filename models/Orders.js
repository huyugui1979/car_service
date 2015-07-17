/**
 * Created by fish on 15/7/9.
 */
var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
    user:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
    item:[{type:mongoose.Schema.Types.ObjectId,ref:'ServiceItem'}],
    name: String,
    phone:String,
    date: Date
});

mongoose.model('Order',OrderSchema);