
import React from 'react'
import  Twitter from '../icons/twitter.png';
import Hackerrank from '../icons/hackerrank.png';
import Codechef from '../icons/codechef.png';
import Github from '../icons/github.png';
import Medium from '../icons/medium.png';
import Linkedin from '../icons/linkedin.png';
import './adddevtodb.css';
import ReactDom from 'react-dom';
const dotenv=require('dotenv');
dotenv.config();
const axios = require('axios').default;
export default class Adddevtodb extends React.Component {
    constructor(props){
        super(props);
        this.state={
          github_id:'',
          linkedin_id:'',
        codechef_id:'',
          hackerrank_id:'',
          twitter_id:'',
        medium_id:''
        }
    }
    handleInputChange= (event) =>{

      let name=event.target.name;
      let val=event.target.value;
      this.setState({[name]:val});
    
  }
    handleSubmit=(event)=>
    {  event.preventDefault();
      if(this.state.github_id=='')
      {
        alert('Github Username can not be empty');

      }
      axios.post(`${process.env.REACT_APP_BACKEND_HOST}/developers`,{
        github_id:this.state.github_id,
        linkedin_id:this.state.linkedin_id,
        codechef_id:this.state. codechef_id,
        hackerrank_id:this.state. hackerrank_id,
       twitter_id:this.state.twitter_id,
       medium_id:this.state.medium_id,
      
       
    })
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    });
    if(this.state.github_id!='')alert('sucessfully submited the form');
    this.setState({
      github_id:'',
      linkedin_id:'',
    codechef_id:'',
      hackerrank_id:'',
      twitter_id:'',
    medium_id:''

    });
    
    this.props.onClose();

    }
   
    render() {
      
        return ReactDom.createPortal(
             
        <div className='z'>
        <form>
            <div className='z1'>
               <div  className='Adp' >
                  Add developer profile
              </div>
            <div className='Adpg'>
             
                   <div>
                    <img src={Github} alt='github' className='ic1' >
                    </img>
                             Github
                      
                    </div>
                  <div>
               
                      <input
                      required
                      name="github_id"
                      value={this.state.github_id}
                         type="text"
                         onChange={this.handleInputChange}
                           />   
                  
                 </div>
            </div>
            <div className='Adpg'>
             
            <div>
             <img src={Linkedin} alt='Linkedin' className='ic1' >
             </img>
                      Linkedin
               
             </div>
           <div>
        
               <input
               name="linkedin_id"
               value={this.state.linkedin_id}
                  type="text"
                  onChange={this.handleInputChange}
                    />   
           
          </div>
     </div>
     <div className='Adpg'>
             
     <div>
      <img src={Codechef} alt='Codechef' className='ic1' >
      </img>
               Codechef
        
      </div>
    <div>
 
        <input
        name="codechef_id"
        value={this.state.codechef_id}
           type="text"
           onChange={this.handleInputChange}
             />   
    
   </div>
</div>
<div className='Adpg'>
             
<div>
 <img src={Hackerrank} alt='Hackerrank' className='ic1' >
 </img>
          Hackerrank
   
 </div>
<div>

   <input
   name="hackerrank_id"
   value={this.state.hackerrank_id}
      type="text"
      onChange={this.handleInputChange}
        />   

</div>
</div>
<div className='Adpg'>
             
<div>
 <img src={Twitter} alt='Twitter' className='ic1' >
 </img>
          Twitter
   
 </div>
<div>

   <input
   name="twitter_id"
   value={this.state.twitter_id}
      type="text"
      onChange={this.handleInputChange}
        />   

</div>
</div>
<div className='Adpg'>
             
<div>
 <img src={Medium} alt='medium' className='ic1' >
 </img>
          Medium
   
 </div>
<div>

   <input
   name="medium_id"
   value={this.state.medium_id}
      type="text"
      onChange={this.handleInputChange}
        />   

      </div>
         </div>
         <div className='add_dev_btn' >
            <button  className='add_dev_btn1' onClick={this.handleSubmit}>
            submit 
            </button>
            <button className='add_dev_btn2' onClick={this.props.onClose}>
            close 
            </button>
            </div>
            </div>
            </form>
        </div>
                                 
        ,document.getElementById('portal'))

         }


}
    
