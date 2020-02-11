import React, { Component } from 'react';
import './main.css';
import './global.css'
import './Cadastro'

function Main() {
    return(
  
      <body>
      <div class="wrapper">
          <div class="main_nav">
          </div>
      </div>
          <h1 class="contact_text">ESCO<span>LHA</span></h1>

          <div className='org'>

          <div className="botao">
            <a href="Cadastro.js">
               <button id ="cadastrar">CADASTRAR CLIENTE</button>
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
           </div>
        
  </body>

    )
}

export default Main;