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
          <div className = "header">
            <div className="inner_header"></div>
          </div>
             
          <div className="barra1">
            <h1>.</h1>
          </div>
  
          <div className="barra3">
            <h1>.</h1>
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
            <div className="line"><p>Dados aqui</p></div>
            <div className="line"><p>Dados aqui</p></div>
            <div className="line"><p>Dados aqui</p></div>
            <div className="line"><p>Dados aqui</p></div>
            <div className="line"><p>Dados aqui</p></div>
            <div className="line"><p>Dados aqui</p></div>
          </div>
          
          <div className="barra2">
            <h1>.</h1>
           </div> 
  
        </body>
        
        
          )
        }
    }


 


  
    
    export default Listar;
    