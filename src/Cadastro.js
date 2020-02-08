import React,{Component} from 'react';
import './globalCad.css';
import HelpList from './HelpList';

import FormRegister from './FormRegister';




class Cadastro extends Component{
  state = {
    users:[
      {user_name:'null',
      user_id:'null',
      user_number:'null',
      user_email:'null'}
    ]
  }

  addUser =(user)=>{
    let users = [...this.state.users, user]

    this.setState({
      users:users
    })
  console.log(this.state);
  }
   
  
  render(){
    
    return (   
      <body> 
        <div className = "header">
          <div className="inner_header"></div>
        </div>
           
        <div className="barra1">
          <h1>.</h1>
        </div>

        <div className="barra3">
          <h1>.</h1>
        </div>
        
        <div className="quadro">
         <div className = "header">
          <div className="inner_header">
            <strong>CADASTRAR</strong>
          </div>
         </div>
        
         <FormRegister addUser={this.addUser}/>   
        
        </div>
        <div className="barra2">
          <h1>.</h1>
         </div> 
         
      </body>
      
        )
        
    }
}
  
    
    export default Cadastro;
    