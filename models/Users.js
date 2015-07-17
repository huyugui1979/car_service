/**
 * Created by yuguihu on 15/7/17.
 */
var UsersSchema = new mongoose.Schema({
    name:String,
    phone:String,
    image:String,
    password:String
});
mongoose.model('User', UserSchema);