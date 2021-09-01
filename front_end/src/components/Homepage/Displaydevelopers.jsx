import Search from './Search';
import React,{Component} from 'react';
//import Card from './Card';
import './header.css';
import { Link, Redirect } from 'react-router-dom';
import  Arrow from '../icons/diagonal.png';
const dotenv=require('dotenv');
dotenv.config();
function  Loading() {
    return (
        <div  className='Loading'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="loading"/>
        </div>

    );
   }

function Card(props){
    return  (
        <div className='card'  >
            
        <img src={props.avatar_url} alt="img" className='roundimg'></img>
          
              <div className='developersname'  >
       
                 {props.name}
                 <Link to={`/${props.name}`}>
                 <img src={Arrow}  className='card_arrow'  />
                 </Link>
               </div>
          
     </div>
    )
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
         
          this.setState(
              {
                  developers:devs,
                  IsLoading:false,
              }
          );
 
    }
    onchange=((dev_id)=>
    {   
        this.state.IsLoading=true;
        fetch(`${process.env.REACT_APP_BACKEND_HOST}/developers/${dev_id}`).then((dev)=>dev.json()).then((dev)=>
        {
             
           
            this.setState({developers:dev,IsLoading:false});

        }).catch((err)=>console.log(err));
 
      
    });

    render()
    {  
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