import React from 'react';
import './globalCad.css';
import Change from './Change.js';


function Alterar(){
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
            <strong>DIGITE O ID DO USUARIO</strong>
          </div>
        </div>

        <form>
          <div className="inputs">
            <label htmlFor="idPesquisar">ID do usuario</label>
            <input name="idPesquisar" id="idPesquisar" required/>
          </div>

          <div className="inputs">      
              <button onClick>ENVIAR</button>
            
          </div>       

        </form>

          <div className="inputs">      
          <a href="Change.js">
              <button onClick>Alterar</button>
            </a>
            
          </div>       


        


        </div>

        <div className="barra2">
          <h1>.</h1>
         </div> 

      </body>
      
        )
    }
  
    
    export default Alterar;
    