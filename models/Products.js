/**
 * Created by yuguihu on 15/7/17.
 */

var ProductSchema = new mongoose.Schema({
    user:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
    desc:String,
    image:String
});
mongoose.model('Product', ProductSchema);