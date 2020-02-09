import React from 'react';
import './globalCad.css';

function Excluir(){
    return(
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
        <strong>DIGITE O ID DO USUARIO</strong>
      </div>
    </div>

    <form>
      <div className="inputs">
        <label htmlFor="idPesquisar">ID do usuario</label>
        <input name="idPesquisar" id="idPesquisar" required/>
      </div>

      <div className="inputs"> 
          <button onClick>Excluir</button>
      </div>       

    </form>     
  

    </div>

    <div className="barra2">
      <h1>.</h1>
     </div> 

  </body>
  
    )
}
  
    
    export default Excluir;
    