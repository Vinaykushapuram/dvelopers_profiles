import React,{Component} from 'react';
import './header.css';
import photo from './headphoto.png';
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
             <div>
             <img src={photo} className='image'></img>
             </div>
             </div>
             <div className='heading3'>
             Explore developers profile 
               </div>
                  

            </div>
        )
    }
}