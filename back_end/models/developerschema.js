var mongoose =require('mongoose');
var  repository=require('./reposchema').schema;
var schema=mongoose.Schema;



const developerschema=new schema(
    {   
        login:
        {
            type:String,
            unique: true,
           
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
        repo:[
           { name:
        {
            type:String,
        },
        html_url : 
        {
            type:String,
        },
        description :
        {
            type:String,
        },
        updated_at:
        {
            type:String,
        }
          }
        ],
       

    },
    {
        timestamps:true
    }
);



var developer=mongoose.model('developer',developerschema);

module.exports=developer;
