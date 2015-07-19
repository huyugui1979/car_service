var express = require('express');
var router = express.Router();
var url = require('url');

//声明数据库
var mongoose = require('mongoose');
//声明数据库链接

mongoose.connect('mongodb://127.0.0.1/car_service');
//声明调用的模型
require('../models/Contents');
require('../models/Activitys');
require('../models/Messages');
require('../models/Cases');
require('../models/Products');
require('../models/Introductions');
require('../models/ServiceItems');
require('../models/Orders');
require('../models/Stores');
require('../models/Users');



//在数据库中开辟一块区域用于存储模型Myclass的值

var Activity = mongoose.model('Activity');
var Message = mongoose.model('Message');
var Case = mongoose.model('Case');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');
var Introduction = mongoose.model('Introduction');
var ServiceItem = mongoose.model('ServiceItem');
var Store = mongoose.model('Store');
var User = mongoose.model('User');
var Content=mongoose.model('Content');
/* GET home page. */

//var user1 = new User({name:'0',phone:'683494',password:''});

//var ser1 = new ServiceItem({desc:'我的的的的的的的的'});
//var act1 = new Activity({title:'优惠1',content:'买一送一',image:'a.jpg',user:user1});
//var mes1 = new Message({content:'梦想总是要有的，要是一不小心实现了呢',messageTime:'11',user:user1});
//var ord1 = new Order({name:'林',phone:'1313131313',date:'36',user:user1});
//var pro1 = new Product({desc:'好东西',image:'b.jpg',user:user1});
//var int1 = new Introduction({content:[{desc:'好东西',type:'image',file:'c.jpg'},{desc:'好东西',type:'image',file:'c.jpg'}],user:user1});
//var sto1 = new Store({name:'有钱人',lat:'112.32145',lng:'32.12352',user:user1});

//user1.save();
//act1.save();
//mes1.save();
//ord1.save();
//pro1.save();
//int1.save();


//sto1.save();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//优惠活动－获取数据
router.get('/activity',function(req,res,next){
  //
  Activity.find(req.query).exec(function(error,result){
    if(error) next(error);
    res.jsonp(result);
  });
  //
})

//优惠活动－保存数据
router.post('/activity',function(req,res,next){
  //
  var activity = new Activity(req.body);
  activity.save(function (error,result) {
    if(error) next(error);
    res.jsonsp(error);
  });
  //
})
//商家介绍－获取数据
router.get('/introduction',function(req,res,next){
  //
  Introduction.find(req.query).exec(function(error,result){
    if(error) next(error);
    res.jsonp(result);
  });
  //
})
//
//router.get('/introduction',function(req,res,next){
//  //
//  Introduction.find(req.query)
//      .populate('user')
//      .exec(function(error,result){
//    if(error) next(error);
//    res.jsonp(result.user);
//  });
//  //
//})

//商家介绍－保存数据
router.post('/introduction',function(req,res,next){
  //
  var introduction = new Introduction(req.body);
  introduction.save(function (error,result) {
    if(error) next(error);
    res.jsonp(error);
  });
  //
})

//留言 － 获取数据
router.get('/message',function(req,res,next){
  //
  Message.find(req.query).exec(function(error,result){
    if(error) next(error);
    res.jsonp(result);
  });
  //
})

//留言 － 保存数据
router.post('/message',function(req,res,next){
  //
  var message = new Message(req.body);
  message.save(function (error,result) {
    if(error) next(error);
    res.jsonp(error);
  });
  //
})

//预约 － 获取数据
router.get('/order',function(req,res,next){
  //
  Order.find(req.query).exec(function(error,result){
    if(error) next(error);
    res.jsonp(result);
  });
  //
})

//预约 －保存数据
router.post('/order',function(req,res,next){
  //
  var order = new Order(req.body);
  order.save(function (error,result) {
    if(error) next(error);
    res.jsonp(error);
  });
  //
})

//产品介绍 － 数据读取
router.get('/product',function(req,res,next){
  //
  Product.find(req.query).exec(function(error,result){
    if(error) next(error);
    res.jsonp(result);
  });
  //
})

//产品介绍 － 保存数据
router.post('/product',function(req,res,next){
  //
  var product = new Product(req.body);
  product.save(function (error,result) {
    if(error) next(error);
    res.jsonp(error);
  });
  //
})

//导航  － 数据读取
router.get('/sotre',function(req,res,next){
  //
  Store.find(req.query).exec(function(error,result){
    if(error) next(error);
    res.jsonp(result);
  });
  //
})

//导航 － 保存数据
router.post('/store',function(req,res,next){
  //
  var store = new Store(req.body);
  store.save(function (error,result) {
    if(error) next(error);
    res.jsonp(error);
  });
  //
})
//服务项目 － 保存数据
router.post('/service',function(req,res,next){
  //
  var service = new ServiceItem(req.body);
  service.save(function (error,result) {
    if(error) next(error);
    res.jsonp(error);
  });
  //
})
router.get('/service',function(req,res,next){
  //
  ServiceItem.find(req.query).exec(function(error,result){
    if(error) next(error);
    res.jsonp(result);
  });
  //
})
module.exports = router;
