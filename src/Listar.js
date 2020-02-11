import React,{Component} from 'react';
import './globalList.css';
import './global.css';


class Listar extends Component{

  letsList=() => {
    this.props.userList();
      
  }
  render(){
  
    return (     
        <body>
          <div class="wrapper">
            <div class="main_nav">
               
            </div>
            <h1 class="contact_text2">USUARI<span>OS</span></h1>
         </div>       
      
          <div className="whiteBoard">
            <div className="line"> <p>NOME: ID: EMAIL:</p></div>
            <div className="line"><p>Dados aqui</p></div>
            <div className="line"><p>Dados aqui</p></div>
            <div className="line"><p>Dados aqui</p></div>
            <div className="line"><p>Dados aqui</p></div>
            <div className="line"><p>Dados aqui</p></div>
            <div className="line"><p>Dados aqui</p></div>
            <div className="line"><p>Dados aqui</p></div>
            <div className="line"><p>Dados aqui</p></div>
            <div className="line"><p>Dados aqui</p></div>
            <div className="line"><p>Dados aqui</p></div>
            <div className="line"><p>Dados aqui</p></div>
            <div className="line"><p>Dados aqui</p></div>
            <div className="line"><p>Dados aqui</p></div>
            
          </div>
          

  
        </body>
        
        
          )
        }
    }


 


  
    
    export default Listar;
    