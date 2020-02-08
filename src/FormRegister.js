import React, { Component } from 'react';


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
           <div className="inputs">
             <label htmlFor="user_name">Nome</label>
             <input name="user_name" id="user_name" required onChange={this.handleChange}/>
           </div>
         

           <div className="inputs">
             <label htmlFor="user_id">ID do usuário</label>
             <input name="user_id" id="user_id" required onChange={this.handleChange} />
           </div>
         

           <div className="inputs">
             <label htmlFor="user_number">Numero do telefone</label>
             <input name="user_number" id="user_number" required onChange={this.handleChange}/>
           </div>
       

           <div className="inputs">
             <label htmlFor="user_email">Email</label>
             <input name="user_email" id="user_email" required onChange={this.handleChange}/>
           </div>
           
           <div className="inputs">
          <button>Salvar</button>
          
          </div>      
         </form>
    )
 }
}


export default FormRegister;