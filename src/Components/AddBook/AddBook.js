
import React, {Component} from 'react';
import axios from 'axios';
import {handleChange} from '../../ducks/reducer';
import {connect} from 'react-redux';


class AddBook extends Component {
    constructor(props){
        super(props);
        // this.state = {
        //     image: '',
        //     title: '',
        //     author: '',
        //     genre: '',
        //     description: ''
        // }
    
       console.log('state', this.state)
       this.add = this.add.bind(this);
       //props return undefined when not bound
        }

       

        add(){
        const { image, title, author, genre, description} = this.props;
        axios.post('/api/books', {image, title, author, genre, description})
        .then(res => {
            console.log('new book', res.data.newBook);
        }).catch(err => console.log('axios post book error-----, err'))
        }

    render(){
        const {dispatch} = this.props;
    return(

        <div className='addBook'>
        <div className='form'> 
            <p>Image</p>
            <input type="text" placeholder="Image url"  onChange={e => dispatch(handleChange('image', e.target.value))} />
            <p>Title</p>
            <input type="text" placeholder="title" onChange ={e => dispatch(handleChange('title', e.target.value))} />
            <p>Author</p>
            <input type="text" placeholder="author" onChange ={e => dispatch(handleChange('author', e.target.value))} />
            <p>Genre</p>
            <input type="text" placeholder="genre" onChange ={e => dispatch(handleChange('genre', e.target.value))} />
            <p>Description</p>
            <input type="text" placeholder="description" onChange ={e => dispatch(handleChange('description', e.target.value))} />
            <button onClick={this.add}>Add Book </button>

        </div>

        </div>

        )
    }
};
const mapStateToProps = state => {
    return state;
}



export default connect(mapStateToProps)(AddBook);