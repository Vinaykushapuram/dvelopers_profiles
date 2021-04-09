var mongoose =require('mongoose');

var schema=mongoose.Schema;

const repository= new schema(
    {
        name:
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


    },
    {
        timestamps:true
    }
);
var repo=mongoose.model('repo',repository);
module.exports=repo;