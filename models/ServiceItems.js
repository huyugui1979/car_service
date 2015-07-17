/**
 * Created by yuguihu on 15/7/17.
 */
var ServiceItemSchema = new mongoose.Schema({
    desc:String
});
mongoose.model('ServiceItem', ServiceItemSchema);