import React,{Component} from 'react';
import './header.css';
import { Link, Redirect } from 'react-router-dom';
import  Arrow from './diagonal.png';
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
                
                    <div className='developersname'  >
             
                       {this.props.name}
                       <Link to={`/${this.props.name}`}>
                       <img src={Arrow}  className='card_arrow'  />
                       </Link>
                     </div>
                
           </div>
            
        )
    }
}