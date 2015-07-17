/**
 * Created by yuguihu on 15/7/17.
 */
var mongoose = require('mongoose');

var IntroductionSchema = new mongoose.Schema(
    {
        user:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
        content:[
            {
                desc:String,
                type:String,
                file:String
            }
        ]
    });
mongoose.model('Introduction', IntroductionSchema);