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
        <div class="wrapper">
            <div class="main_nav">
               
            </div>
            <h1 class="contact_text2">CADAS<span>TRO</span></h1>
         </div>
         <FormRegister addUser={this.addUser}/>
        
    </body>

       
        

      
        )
        
    }
}
  
    
    export default Cadastro;
    