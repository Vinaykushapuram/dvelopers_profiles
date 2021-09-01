import React,{Component} from 'react';
import './header.css';
import '../Developerspage/developerspage.css';
import Searchpng from '../icons/search.png';
export default class searchBar extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={
            id:''
        }
    }

    handleInputChange= (event) =>{

        let name=event.target.name;
        let val=event.target.value;
        this.setState({[name]:val});
      
    }
render()
{
    return (
        <div className='search'>
        <div className='search_bar'>
        <input type="text"
           name='id'
           value={this.state.id}
           onChange={this.handleInputChange}
         placeholder="Search.." className='search_txt'/>
          <img  onClick={()=>(this.props.onchange(this.state.id)) } src={Searchpng} className='search_icon' >
        </img>
       
        

        </div>
         </div>
    )
}
}