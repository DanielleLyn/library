import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from './App';
import AllBooks from './Components/AllBooks/AllBooks';
import AddBook from './Components/AddBook/AddBook';


const routes = (
    <Switch>
        
        <Route exact path = '/' component = {App} />
        <Route path = '/AllBooks' component = {AllBooks} />
        <Route path='/AddBook' component={AddBook} />

      
    </Switch>
    

);

export default routes;