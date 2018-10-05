import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from './App';
import AllBooks from './Components/AllBooks/AllBooks';
import AddBook from './Components/AddBook/AddBook';
import UserBooks from './Components/UserBooks/UserBooks';



const routes = (
    <Switch>
        
        <Route exact path = '/' component = {App} />
        <Route path = '/AllBooks' component = {AllBooks} />
        <Route path='/AddBook' component={AddBook} />
        <Route pUserBooksath='/userBooks' component={UserBooks} />

      
    </Switch>
    

);

export default routes;