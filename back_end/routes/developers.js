var express = require('express');
var router = express.Router();
var developer=require('../models/developerschema');


router.get('/developers', function(req, res, next) {
  
  developer.find({},{id:1,avatar_url:1}).then((developers)=>
  {
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    res.json(developers);

  });
});



router.post('/developers',function(req,res,next){

  

});
router.delete('/developers',function(req,res,next){
  var query=req.body;

  developer.find({query}).then((developer)=>
  {
     
  });

});
router.get('/developers/:id',function(req,res,next){
  var query=req.params;
  developer.find(query,{id:1,avatar_url:1}).then((developer)=>
  {if(developer){
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    res.json(developer);}
  });


});



module.exports = router;
