import React,{Component} from 'react';
import './header.css';


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
        <div className='searchbar' >
        <div>
        <input type="text"
           name='id'
           value={this.state.id}
           onChange={this.handleInputChange}
         placeholder="Search.." />
        <button type="submit"> Search</button>
        </div>
        </div>
    )
}
}