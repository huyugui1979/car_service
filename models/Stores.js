/**
 * Created by yuguihu on 15/7/17.
 */
var mongoose = require('mongoose');
var StoreSchema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    name:String,
    lat:Number,
    lng:Number
});
mongoose.model('Store', StoreSchema);