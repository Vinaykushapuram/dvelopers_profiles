import Search from './searchbar';
import React,{Component} from 'react';
import Card from './Card';
const dotenv=require('dotenv');
dotenv.config();
function  Loading() {
    return (
        <div  className='Loading'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="loading"/>
        </div>

    );
   }
export default class Developers extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={
            developers:[],
            IsLoading:true,
        }
    
    }
   async componentDidMount()
    {
       var developers1=await fetch(`${process.env.REACT_APP_BACKEND_HOST}/developers`);
       var devs=await developers1.json();
         // console.log(devs);
          this.setState(
              {
                  developers:devs,
                  IsLoading:false,
              }
          );
 
    }
    onchange=((dev_id)=>
    {   //console.log('onchange is called')
        this.state.IsLoading=true;
        fetch(`${process.env.REACT_APP_BACKEND_HOST}/developers/${dev_id}`).then((dev)=>dev.json()).then((dev)=>
        {
            
           // console.log(dev);
            this.setState({developers:dev,IsLoading:false});

        }).catch((err)=>console.log(err));

      
    });

    render()
    {  {console.log(this.state.developers)}
        return(
        
            <div>
            <Search onchange={this.onchange} />
            <div className='displaycard'>
            { this.state.IsLoading ?<Loading />:this.state.developers.map((dev)=>
                {
                    return (
                        <div>
                        <Card name={dev.login} avatar_url={dev.avatar_url} />
                        </div>
                    )
                })}
            </div>
            </div>
        )
    }
}