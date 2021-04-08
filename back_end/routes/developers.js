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
  var query=req.body;
  var newuser=new developer;
  fetch(`https://api.github.com/users/${query.github_id}`).then((user)=>
  {   
    
      if(user.status!=200){
         res.send("username is invalid ");
         res.statusCode=400;
      }
      else
      {
       
         newuser.id=user.login;
         newuser.avatar_url=user.avatar_url;
        newuser.name=user.name;
        newuser.company=user.company;
        newuser.blog=user.blog;   
         newuser.location=user.location;
        newuser.email=user.email;
        newuser.bio=user.bio;
        newuser.github_id=user.github_id;
        newuser.linkedin_id=user.linkedin_id;
        newuser.codechef_id=user.codechef_id;
        newuser.hackerrank_id;user.hackerrank_id;
        newuser.twitter_id=user.twitter_id;
        newuser.medium_id=user.medium_id;
       
        fetch(user.repos_url).then((repos)=>
        {
          for(let a of repos )
          {
            var b={
              "name": "awesome-learn-to-code",
		           "html_url": "https://github.com/gcnit/awesome-learn-to-code",
		           "description": "A list of awesome resources for learning to code",
		           "updated_at": "2020-08-12T18:21:53Z"
            }
            b.name=a.name;
            b.html_url=a.html_url;
            b.description=a.description;
            b.updated_at=a.updated_at;
            newuser.repo.push(b);
          }
        });

        developer.create(newuser).then((newuser)=>{
          console.log('user Created ', newuser);
        res.statusCode = 201;
        res.setHeader('Content-Type','application/json');
        res.json({"id":newuser.id});
        });

      }
  });

  

});
router.delete('/developers/:id',function(req,res,next){
  var query=req.params;

  developer.remove({query}).then((developer)=>
  {
     res.statusCode=204;

  });

});
router.get('/developers/:id',function(req,res,next){
  var query=req.params;
  developer.find(query,{id:1,avatar_url:1}).then((developer)=>
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
  });


});



module.exports = router;
