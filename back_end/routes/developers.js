var express = require('express');
var router = express.Router();
var developer=require('../models/developerschema');
var fetch=require('node-fetch');

router.get('/developers', function(req, res, next) {
  
  developer.find({},{login:1,avatar_url:1}).then((developers)=>
  {
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    res.json(developers);

  }).catch((err)=>next(err));
});



router.post('/developers',function(req,res,next){
  var query=req.body;
  var newuser=new developer();
  async function  getdeveloper(query,newuser)
  {  try{
      var developer=await fetch(`https://api.github.com/users/${query.github_id}`);
      var user=await developer.json();
     // console.log(user);
      var developerrepos=await fetch(`https://api.github.com/users/${query.github_id}/repos`);
      var repos=await developerrepos.json();
      //console.log(repos);
      
      newuser.login=user.login;
      newuser.avatar_url=user.avatar_url;
     newuser.name=user.name;
     newuser.company=user.company;
     newuser.blog=user.blog;   
      newuser.location=user.location;
     newuser.email=user.email;
     newuser.bio=user.bio;
     newuser.github_id=user.login;
     newuser.linkedin_id=query.linkedin_id;
     newuser.codechef_id=query.codechef_id;
     newuser.hackerrank_id=query.hackerrank_id;
     newuser.twitter_id=query.twitter_id;
     newuser.medium_id=query.medium_id;
     repos.forEach((a) =>  {
    
      var b={
        "name": "awesome-learn-to-code",
         "html_url": "https://github.com/gcnit/awesome-learn-to-code",
         "description": "A list of awesome resources for learning to code",
         "updated_at": "2020-08-12T18:21:53Z"
      };
      b.name=a.name;
      b.html_url=a.html_url;
      b.description=a.description;
      b.updated_at=a.updated_at;
     // console.log(b);
      newuser.repo.push(b);
      //console.log(newuser);
    });
   // console.log(newuser);
    newuser.save()
    .then(data => {
      res.json({"login":data.login});
      res.statusCode=201;
    })
    .catch(err => {
      res.send("Error posting to DB")
    });
  } catch(err)
  {
    next(err);
  }

  }
 
  getdeveloper(query,newuser);
  

    
    });


router.delete('/developers/:login',function(req,res,next){
  var query=req.params;
console.log(query);
  developer.deleteOne({"login":req.params.login}).then((developer)=>
  {  
    
     res.statusCode=204;
     console.log(developer);
    res.json(developer);
  }).catch((err)=>next(err));

});

router.get('/developers/:login',function(req,res,next){
  var query=req.params;
  developer.find(query).then((developer)=>
  {if(developer){
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    res.json(developer);}
    else 
    {
      res.statusCode=404;
      res.setHeader('Content-Type','application/json');
      res.json("user does not exist");
    }
  }).catch((err)=>next(err));


});



module.exports = router;
