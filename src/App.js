import React, { Component } from 'react';
import './App.css';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
      Login
        <div className='All_Books'>
         {routes}
        </div>
      </div>
    );
  }
}

export default App;