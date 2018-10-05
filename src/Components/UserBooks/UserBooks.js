import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {setBooks} from '../../ducks/reducer';


class UserBooks extends Component {
    constructor(){
        super();
        this.state={
           historyBooks:[],
        }
       
    }
     
        render() {
            let bookHistory = this.state.historyBooks.map((books,i) => {
                return(
                    <div className="book" key={i}>
                    <h1>{books.username}</h1>
                    <h1>{books.message}</h1>
                    </div>
                )
            })
          
      console.log('books', this.state.historyBooks)
    return (
        <div>
            <div>{bookHistory}</div>
        <div>hello</div>
      </div>
    );
  }
}

export default UserBooks