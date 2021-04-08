var mongoose =require('mongoose');
var  repository=require('./reposchema');
var schema=mongoose.Schema;


const developerschema=new schema(
    {   login:
        {
            type:String
        },
        id:
        {
            type:Number,
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
            type:Number,
        },
        linkedin_id : 
        {
            type:Number,
        },
        codechef_id :
        {
            type:Number,
        },
        hackerrank_id :
        {
            type:Number,
        },
        twitter_id : 
        {
            type:Number,
        },
        medium_id :
        {
            type:Number,
        },
        repo:[repository],
       

    },
    {
        timestamps:true
    }
);



var developer=mongoose.model('developer',developerschema);

module.exports=developer;
