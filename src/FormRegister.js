import React, { Component } from 'react';
import './main.css';


class FormRegister extends Component {

    state ={
        user_name:null,user_id:null,user_email:null,user_number:null
      }
    
      handleChange = (e) =>{
          this.setState({
              [e.target.id]: e.target.value
          })
      }

      handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addUser(this.state);
      }

  render(){
    return(
         
        <form onSubmit={this.handleSubmit}>
           <form>
      
             <input name="user_name" id="user_name" required onChange={this.handleChange} placeholder="NOME"/>
               <br></br>
             <input name="user_id" id="user_id" required onChange={this.handleChange} placeholder="ID"/>
        
             <br></br>
             <input name="user_number" id="user_number" required onChange={this.handleChange} placeholder="NUMERO"/>
       
             <br></br>
      
             <input name="user_email" id="user_email" required onChange={this.handleChange} placeholder="EMAIL"/>
             <br></br>
             <input type="submit" value="ENVIAR"/>
          
           </form>
           

          
               
         </form>
    )
 }
}


export default FormRegister;