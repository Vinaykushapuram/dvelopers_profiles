import React,{Component} from 'react';
import './header.css';
import photo from '../icons/headphoto.png';
import Love from '../icons/heart.png'
import Developers from './Displaydevelopers';
import Adddeveloper from '../Adddeveloper/Adddeveloper';

export default class Header extends React.Component{

    render()
    {
        return (
            <div>
            
            <div  className='header' >
            <div className='heading '>
               <div >
                 The Developer
               </div>
               
               <div >
                 Repository
                  </div>
             </div>
             <div className='heading_image'>
             <img src={photo} alt='img'className='image'></img>
             </div>
             </div>
             <div className='heading3'>
             Explore developers profile 
               </div>
                  
           
            <Developers />
            <Adddeveloper />
            <div className='footer'> 
            made with &nbsp; <img src={Love} className='footer_icon'/> &nbsp; by Vinay
             </div>
            </div>
        )
    }
}