import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Link } from 'react-router-dom';
import {setBooks} from '../../ducks/reducer';


class AllBooks extends Component {
    constructor(){
        super();
        this.state={
           books:[],
        }
        this.deleteBook = this.deleteBook.bind(this);
    }
    componentDidMount() {
        axios.get('/api/books')
        .then(res => {
            console.log('response', res.data)
            this.props.setBooks(res.data)
            this.setState({
                books: res.data
            })
        })
        .catch(error => {
            console.log('Axios error GET componentDidMount', error)
          })
        }

    deleteBook(id){
        return axios.delete(`/api/book/${id}`)
        .then(res => {
            console.log('res', res.data);
          
        }).catch(err => console.log('error deleting song', err));
    }    
        render() {
            console.log('new state', this.state);
            console.log('this.props.books', this.props.books)
      const books = this.state.books.map((book,index) =>{
          return <div key={book.id}>
          <div><img src={book.image} /></div>
          <div>title: {book.title}</div>
          <div>author:{book.author} </div>
          <div>genre:{book.genre} </div>
          <div>description:{book.description} </div>
          <Link to={`/book/${book.id}`}>learn more</Link>
          <div><button onClick={() => this.deleteBook(book.id)}>delete</button></div>
          </div>
      })
      
    return (
      <div className="App">
       {/* {this.props.match.params.id} */}
        <div><Link to={`/AddBook`}>Add Book</Link></div>
        <div>{books}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return{
        state
    }
}

const mapDispatchToProps = {
    setBooks,
}

export default connect (mapStateToProps, mapDispatchToProps)(AllBooks)