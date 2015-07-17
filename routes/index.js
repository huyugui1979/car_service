var express = require('express');
var router = express.Router();
var url = require('url');

//声明数据库
var mongoose = require('mongoose');
//声明数据库链接

mongoose.connect('mongodb://10.211.55.3/car');
//声明调用的模型

//require('../models/Activitys');
//require('../models/Messages');
//require('../models/Casefas');
//require('../models/Cases');
//require('../models/Casesons');
//require('../models/Orders');
//require('../models/Shows');
//require('../models/Cars');
//require('../models/Talks');
//require('../models/Talkfs');
//require('../models/Messageblocks');
//在数据库中开辟一块区域用于存储模型Myclass的值

var Activity = mongoose.model('Activity');
var Message = mongoose.model('Message');
var Case = mongoose.model('Case');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');
var Message = mongoose.model('Message');
var Introduction = mongoose.model('Introduction');
var ServiceItem = mongoose.model('ServiceItem');
var Store = mongoose.model('Store');
var User = mongoose.model('User');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/activity',function(req,res,next){
  //
  Activity.find(req.query).exec(function(error,result){
    if(error) next(error);
    res.jsonp(result);
  });
  //
})
router.post('/activity',function(req,res,next){
  //
  var activity = new Activity(req.body);
  activity.save(function (error,result) {
    if(error) next(error);
    res.jsonsp(error);
  });
  //
})
router.get('/introduction',function(req,res,next){
  //
  Introduction.find(req.query).exec(function(error,result){
    if(error) next(error);
    res.jsonp(result);
  });
  //
})
router.post('/introduction',function(req,res,next){
  //
  var introduction = new Introduction(req.body);
  introduction.save(function (error,result) {
    if(error) next(error);
    res.jsonsp(error);
  });
  //
})
router.get('/message',function(req,res,next){
  //
  Message.find(req.query).exec(function(error,result){
    if(error) next(error);
    res.jsonp(result);
  });
  //
})
router.post('/message',function(req,res,next){
  //
  var message = new Message(req.body);
  message.save(function (error,result) {
    if(error) next(error);
    res.jsonsp(error);
  });
  //
})
router.get('/order',function(req,res,next){
  //
  Activity.find(req.query).exec(function(error,result){
    if(error) next(error);
    res.jsonp(result);
  });
  //
})
router.post('/order',function(req,res,next){
  //
  var order = new Order(req.body);
  order.save(function (error,result) {
    if(error) next(error);
    res.jsonsp(error);
  });
  //
})
router.get('/product',function(req,res,next){
  //
  Product.find(req.query).exec(function(error,result){
    if(error) next(error);
    res.jsonp(result);
  });
  //
})
router.post('/product',function(req,res,next){
  //
  var product = new Product(req.body);
  product.save(function (error,result) {
    if(error) next(error);
    res.jsonsp(error);
  });
  //
})
router.get('/sotre',function(req,res,next){
  //
  Store.find(req.query).exec(function(error,result){
    if(error) next(error);
    res.jsonp(result);
  });
  //
})
router.post('/store',function(req,res,next){
  //
  var store = new Store(req.body);
  store.save(function (error,result) {
    if(error) next(error);
    res.jsonsp(error);
  });
  //
})

module.exports = router;
