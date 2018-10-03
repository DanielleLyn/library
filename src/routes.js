import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from './App';
import AllBooks from './Components/AllBooks/AllBooks';


const routes = (
    <Switch>
        
        <Route exact path = '/' component = {App} />
        <Route path = '/AllBooks' component = {AllBooks} />

      
    </Switch>
    

);

export default routes;