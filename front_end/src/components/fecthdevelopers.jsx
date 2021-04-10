import React,{Component} from 'react';
import Card from './Card';
export default class Developers extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={
            developers:[],
        }

    }
   async componentDidMount()
    {
       var developers1=await fetch('http://localhost:3000/developers');
       var devs=await developers1.json();
          console.log(devs);
          this.setState(
              {
                  developers:devs
              }
          );
 
    }
    render()
    {
        return(
            <div className='displaycard'>
            {this.state.developers.map((dev)=>
                {
                    return (
                        <div>
                        <Card name={dev.login} avatar_url={dev.avatar_url} />
                        </div>
                    )
                })}
            </div>
        )
    }
}