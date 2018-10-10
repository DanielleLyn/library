import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import routes from './routes';

class App extends Component {
  constructor(){
    super();

    this.login=this.login.bind(this);

  }
  
   login = () => {
    
    const redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`);
    window.location = `https://${process.env.REACT_APP_DOMAIN}/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`
  }
  render() {

    return (
      <div className="App">
   
        <div className='All_Books'>
        <button><Link to='/login'>Log In</Link></button>
         {routes}
         
        </div>
      </div>
    );
  }
}

export default App;
