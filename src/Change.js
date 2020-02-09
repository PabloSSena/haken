import React from 'react';
import './globalCad.css';
import './global.css';
import FormRegister from './FormRegister'


function Change(){
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
          <strong>Alterar</strong>
        </div>
       </div>
      
       <FormRegister/> 
      
      </div>
      <div className="barra2">
        <h1>.</h1>
       </div> 
       
    </body>
      
        )
    }
  
    
    export default Change;
    