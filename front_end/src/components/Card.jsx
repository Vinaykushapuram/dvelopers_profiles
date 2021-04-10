import React,{Component} from 'react';
import './header.css';
export default class Card extends React.Component{
  constructor(props)
  {
      super(props);
  }

    render()
    {
        return(
            <div className='card'>
            
              <img src={this.props.avatar_url} alt="img" className='roundimg'></img>
         
             <div className='developersname'>
              {this.props.name}
            </div>
            </div>
        )
    }
}