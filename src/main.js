import React from 'react';
import './global.css';
import './logo_container.css';
import './pfvr.css';
import './botao.css';

function Main(){
    return(
    <body>

    <div className = "header">
    
      <div className="inner_header">

        <div classname="logo_container">
          <h1>My<span>Site</span></h1>
        </div>

        <div className="pfvr">
          <h1>ESCOLHA UMA OPÇÃO</h1>
        </div>
      </div>

    </div>
   
   <div className="barra1">
     <h1>.</h1>
   </div>

   <div className="barra3">
     <h1>.</h1>
   </div>

   <div className="botao">
     <a href="Cadastro.js">
       <button onClick id ="cadastrar">CADASTRAR CLIENTE</button>
    </a>
   </div>

   <div className="botao">
     <a href="Alterar.js">
       <button id ="alterar">ALTERAR CLIENTE</button>
       </a>
   </div>

   <div className="botao">
     <a href="Listar.js">
       <button id ="Listar"> LISTAR CLIENTES</button>
     </a>
   </div>

   <div className="botao">
     <a href="Excluir.js">
       <button id ="exluir">EXCLUIR CLIENTE</button>
     </a>
   </div>

   <div className="barra2">
     <h1>.</h1>
   </div> 

  </body> 
    )
}

export default Main;