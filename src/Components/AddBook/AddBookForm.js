
import React, {Component} from 'react';



class AddBookForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            image: '',
            title: '',
            author: '',
            genre: '',
            description: ''
        }
       
        }
        console.log('new state', this.state)
        // Add(new state){
        // dispatch to store/post
        // }

    render(){
        // const {dispatch} = this.props;
    return(

        <div className='addBook'>
        <div className='form'> 
            <p>Image</p>
            <input type="text" placeholder="Image url" value={this.state.image} onChange={this.onImageChange} />
            <p>Title</p>
            <input type="text" placeholder="title" />
            <p>Author</p>
            <input type="text" placeholder="author" />
            <p>Genre</p>
            <input type="text" placeholder="genre" />
            <p>Description</p>
            <input type="text" placeholder="description" />
            <button onClick={this.Add}>Add Book </button>

        </div>

        </div>

        )
    }
};
// const mapStateToProps = state => {
//     return state;
// }



export default AddBookForm;