import React,{Component} from 'react';
import './header.css';


export default class searchBar extends React.Component{


render()
{
    return (
        <div className='searchbar' >
        <div>
        <input type="text" placeholder="Search.." />
        <button type="submit"><i class="fa fa-search"></i></button>
        </div>
        </div>
    )
}
}