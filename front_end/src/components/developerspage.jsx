
import React,{Component} from 'react';
import './developerspage.css';
import  Twitter from './twitter.png';
import Hackerrank from './hackerrank.png';
import Codechef from './codechef.png';
import Github from './github.png';
import Medium from './medium.png';
import Linkedin from './linkedin.png';
import  Footer from './frontpagefooter';
import { Link, Redirect } from 'react-router-dom';
const dotenv=require('dotenv');
dotenv.config();
function Headbar()
{
    return (
        <div className='dheader'>
          <div   className='dheader_1'>
              The Developer Profile
           </div>
        <div   className='dheader_2'>
            <Link to={'/'} className='dheader_link'>
            All Developers
        </Link>
       </div>
        </div>
    );
}
function Profileinfo(props)
{  //console.log(props.developer.avatar_url);
    return (
        <div className='profileinfo'>
              <div className='profile_pic'>
                 <img src={props.developer.avatar_url} alt='img'className='droundimg'></img>
              </div>
            <div className='info'>
                 <div className='info_name'>
                    {props.developer.name}
                 </div>
                 <div className='info_bio'>
                    {props.developer.bio}
                 </div>
                 <div className='platform-icons ' >
                    <div className='platform-icon'>
                        <a href={`https://github.com/sharshach/${props.developer.github_id}`}>
                           <img src={Github} className='ic' >
                            </img>
                         </a>
                    </div>
                    <div className='platform-icon'>
                         <a href={`https://www.linkedin.com/in/${props.developer.linkedin_id}`}>
                          <img src={Linkedin}className='ic' >
                         </img>
                        </a>
                    </div>
                    <div className='platform-icon'>
                      <a  href={`https://www.codechef.com/users/${props.developer.codechef_id}`}>
                      <img src={Codechef} className='ic' >
                       </img>
                      </a>
                  </div> 
                    <div className='platform-icon'>
                       <a  href={`https://www.hackerrank.com/${props.developer.hackerrank_id}`} >
                       <img src={Hackerrank} className='ic'>
                       </img>
                       </a>
                  </div>
                  <div className='platform-icon'>
                     <a href ={`https://medium.com/@${props.developer.medium_id}`}>
                    <img src={Medium} className='ic'>
                     </img>
                   </a>
                 </div>
                 <div className='platform-icon'>
                     <a href={`https://twitter.com/${props.developer.twitter_id}`}>
                    <img src={Twitter} className='ic'>
                     </img>
                   </a>
                 </div>
                </div>
                 <div className='info_location'>
                    {props.developer.location}
                 </div>
            
            </div>
        </div>
    )
}
function Repo(props)
{
    return(

        <div className='repo'>
           <div className='repo_name_update'>
              <a className='repo_name' href={props.repo.html_url}>
               {props.repo.name}
             </a>
             <div  className='repo_updated_at' >
                last updated_at   {props.repo.updated_at}
               </div>
           </div>
           <div  className='repo_description'>
               {props.repo.description}
          </div>
        </div>
    )
}
class Displayrepo extends React.Component{
    constructor(props)
    {
        super(props);
        this.state=
        {
            repos:[],
            developers:[],
            developer:{},
            
        }

    }
   async componentDidMount()
    {//console.log('hi');
      var developer1= await fetch(`${process.env.REACT_APP_BACKEND_HOST}/developers`+`${window.location.pathname}`);
      var developerj=await developer1.json();
            console.log(developerj);
       this.setState({developers:developerj});
       this.setState({developer:developerj[0]})
        this.setState({repos:developerj[0].repo});

       
        
    }
    render()
    {   
        return (
            <div>
            <Profileinfo  developer={this.state.developer} />
              <div className='repositorys'>
              <div className='repo_heading'>
              Github repositories 
              </div>
              <div>
              {this.state.repos.map((repo)=>
                {return(<div>
                    <Repo repo={repo}/> 
                    </div>)
                })}
                </div>
             
              </div>
            </div>
        )
    }
}
export default class Developerspage extends React.Component{

    constructor(props)
    {
        super(props);
    }
    render()
    {return(
        <div className='developerspage'>
    
      <Headbar />
    
      <Displayrepo />
      <Footer />
      </div>
    );
    }
}