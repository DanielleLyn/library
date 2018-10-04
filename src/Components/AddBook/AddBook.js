// import axios from 'axios';
// import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import {AddNewBook} from '../../ducks/reducer';
import {setBooks} from '../../ducks/reducer';
// import {connect} from 'react-redux';



class AddBook extends Component {
    // constructor(){
    //     super();
    //    this.createListing = this.createListing.bind(this);   
    //     }
        
    // createListing(){
    //     const{image, name, price, description, category} = this.props;
    //     axios.post('/api/listing', {image, name, price, description, category})
    //     .then(res => {
    //         console.log(res.data.newListing);
    //         window.location.reload();
    //     }).catch(err=> console.log('Axios Post Listing error', err));
    // }
   
    render(){
        // const {dispatch} = this.props;
    return(

        <div className='addBook'>
        <div className='form'> 
            <p>Image</p>
            <input type="text" placeholder="Image url" />
            <p>Title</p>
            <input type="text" placeholder="title" />
            <p>Author</p>
            <input type="text" placeholder="author" />
            <p>Genre</p>
            <input type="text" placeholder="genre" />
            <p>Description</p>
            <input type="text" placeholder="description" />
            <button>Add Book </button>

        </div>

        </div>

        )
    }
};
// const mapStateToProps = state => {
//     return state;
// }



export default AddBook;