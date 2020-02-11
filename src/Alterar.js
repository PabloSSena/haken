import React from 'react';
import './globalCad.css';
import Change from './Change.js';


function Alterar(){
    return (
   
      <body>
      <div class="wrapper">
          <div class="main_nav">
              <a class="btn_nav" href="#"></a>
          </div>
          <h1 class="contact_text3">DIGITE O <span>ID</span> DO USUARIO</h1>
         

          <form>
         
           
            <input name="idPesquisar" id="idPesquisar" required placeholder="ID"/>  
              <br></br>
            <input type="submit" value="ENVIAR"/>
            

            
          </form>
       </div>
      
  </body>
      
        )
    }
  
    
    export default Alterar;
    