var express = require('express');
var router = express.Router();
var fetch=require('node-fetch');
const database=require('../models/database');
const helper=require('./helper');
let DB;
let Helper;
const developers=DBConnect=>{
    DB=database(DBConnect);
    Helper=database(DBConnect);
    return router;
}

router.get('/developers', function(req, res, next) {
    DB.getAllDevelopers()
    .then(result=>{
        res.status(200).send(result);
    }).catch(err=>{
        res.send(err);
    })
});

router.post('/developers',function(req,res,next){
    var query=req.body;
    async function getData(){
        var user=await fetch(`https://api.github.com/users/${query.github_id}`);
        user=await user.json();
        var repos=await fetch(`https://api.github.com/users/${query.github_id}/repos`);
        repos=await repos.json();

       
        // add repos
        repos.forEach((repo) =>  {
            DB.addRepo({...repo,github_id:user.login}).then().catch(err=>console.log(err));
        });
        // add user
        const mergePromise = Promise.all([
            DB.addDeveloper({...query,username:query.github_id}),
            DB.addGitHubMeta({...user,github_id:query.github_id})
        ]);
        mergePromise
            .then(result => {
                res.status(200).send(username);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    }
    getData();
});




router.get('/developers/:login',function(req,res,next){
    const mergePromise = Promise.all([
        DB.getDeveloper(req.params.login),
        DB.getMeta(req.params.login),
        DB.getAllRepos(req.params.login)
    ]);
    mergePromise
        .then(result => {
            res.status(200).send({...result[0], ...result[1], repos:result[2]});
        })
        .catch((err) => {
            console.log(err,"hello");
            res.status(500).send(err);
        });
});

router.put('/developers/:login/repos',function(req,res,next){
    async function getData(){
      
        // add repos
        repos.forEach((repo) =>  {
            DB.addRepo({...repo,github_id:req.params.login}).then().catch(err=>console.log(err));
        });
        res.send("sucess");
    }
    getData();
});

module.exports = developers;
