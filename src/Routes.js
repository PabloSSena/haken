import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Cadastro from './Cadastro';
import Main from './main';
import Alterar from './Alterar';
import Listar from './Listar';
import Excluir from './Excluir';
import Change from './Change';



const Routes = () =>(
    <BrowserRouter>
       <Switch>

        <Route exact path="/" component={()=> <Main/> }/>
          
        <Route exact path="/cadastro.js" component={()=> <Cadastro /> }/>

        <Route exact path="/alterar.js" component={()=> <Alterar/> }/>

        <Route exact path="/listar.js" component={()=> <Listar/> }/>

        <Route exact path="/excluir.js" component={()=> <Excluir/> }/>

        <Route exact path="/change.js" component={()=> <Change/> }/>

       </Switch>

    </BrowserRouter>
);

export default Routes;