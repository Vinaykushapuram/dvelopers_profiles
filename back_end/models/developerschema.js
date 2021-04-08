var mongoose =require('mongoose');
var  repository=require('./reposchema');
var schema=mongoose.Schema;


const developerschema=new schema(
    {   
        id:
        {
            type:String,
             required:true,
             unique:true
        },
        avatar_url:
        {
            type:String,
        },
        name:
        {
            type:String,
        },
        company:
        {
            type:String,
        },
        blog: 
        {
            type:String,
        },
        location :
        {
            type:String,
        },
        email:
        {
            type:String,
            default:null,
        },
        bio :
        {
            type:String,
        },
        github_id :
        {
            type:String,
        },
        linkedin_id : 
        {type:String,
        },
        codechef_id :
        {
            type:String,
        },
        hackerrank_id :
        {
            type:String,
        },
        twitter_id : 
        {
            type:String,
        },
        medium_id :
        {type:String,
        },
        repo:[repository],
       

    },
    {
        timestamps:true
    }
);



var developer=mongoose.model('developer',developerschema);

module.exports=developer;
