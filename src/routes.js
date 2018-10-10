import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from './App';
import AllBooks from './Components/AllBooks/AllBooks';
import AddBook from './Components/AddBook/AddBook';
import UserBooks from './Components/UserBooks/UserBooks';
import Login from './Components/Login/Login';



const routes = (
    <Switch>
        
        <Route exact path = '/' component = {App} />
        <Route path = '/AllBooks' component = {AllBooks} />
        <Route path='/AddBook' component={AddBook} />
        <Route path='/userBooks' component={UserBooks} />
        <Route path='/login' component={Login} />
      

      
    </Switch>
    

);

export default routes;