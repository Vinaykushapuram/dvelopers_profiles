import React,{Component} from 'react';
import './header.css';
import Adddeveloper from './Adddevtodb.jsx';
export default class Adddevloper  extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={
            isopen:false,
        
        }
        this.setIsopen=this.setIsopen.bind(this);

    }
   setIsopen()
   { console.log('hi');
       this.setState({isopen:!this.state.isopen});

   }
    render()
    {
        return(
            
            <div  className='addev'>
              <div className='addevtxt'>
              could not find what you were looking for ?
              </div>
              <div className='adbtn'>
              <button className='adbtn1'  onClick = {this.setIsopen} >
              Add developer info
              </button>
              
                {this.state.isopen ? (
                    <Adddeveloper  open={this.state.isopen} onClose={()=>{this.setIsopen()}} />
                  ) : null}

                
              
              </div>
            </div>
            
        )
    }
}