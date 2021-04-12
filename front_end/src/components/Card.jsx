import React,{Component} from 'react';
import './header.css';
import { Link, Redirect } from 'react-router-dom';
export default class Card extends React.Component{
  constructor(props)
  {
      super(props);
     
  
  }

    render()
    {
        return(
         
            <div className='card'  >
            
              <img src={this.props.avatar_url} alt="img" className='roundimg'></img>
                 <Link to={`/${this.props.name}`}>
                    <div className='developersname'  >
             
                       {this.props.name}
             
                     </div>
                </Link>
           </div>
            
        )
    }
}