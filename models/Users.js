/**
 * Created by yuguihu on 15/7/17.
 */
var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    name:String,
    phone:String,
    image:String,
    password:String
});
mongoose.model('User', UserSchema);