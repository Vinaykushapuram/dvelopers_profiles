import React,{Component} from 'react';
import './header.css';
import photo from './headphoto.png';
import Search from './searchbar';
import Developers from './fecthdevelopers';
import Adddevloper from './adddeveloper';
import Footer from './frontpagefooter';
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
             <img src={photo} alt='img'className='image'></img>
             </div>
             </div>
             <div className='heading3'>
             Explore developers profile 
               </div>
                  
            
            <Developers />
            <Adddevloper />
            <Footer />
            </div>
        )
    }
}