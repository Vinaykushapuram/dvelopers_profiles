import React,{Component} from 'react';
import './header.css';


export default class Adddevloper  extends React.Component{

    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div  className='addev'>
              <div className='addevtxt'>
              could not find what you were looking for ?
              </div>
              <div className='adbtn'>
              <button className='adbtn1'>
              Add developer info
              </button>
              </div>
            </div>
        )
    }
}