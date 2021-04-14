import React,{Component} from 'react';
import './header.css';
import Love from './heart.png'

export default class Footer extends React.Component{


    render()
    {
        return (
            <div className='footer'> 
            made with &nbsp; <img src={Love} className='footer_icon'/> &nbsp; by Vinay
             </div>
        )

    }
}
