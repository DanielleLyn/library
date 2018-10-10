module.exports = {
    read: ( req, res, next ) => {
        const db = req.app.get('db');
        db.view_all_books().then(response=>{
            res.status(200).json(response);
        })
    },
    post: (req,res) => {
        const {image, title, author, genre, description} =req.body;
        const newBook ={image, title, author, genre, description}; 

        const db = req.app.get('db');

        db.create_book(newBook)
        .then(book => {
    //          if (req.session.history) {
    //   req.session.history.push(book);
    // } else {
    //   req.session.history = [];
    //   req.session.history.push(book);
    // }
            res.status(200).json({message: 'book created!'})
        }).catch(err => console.log('create book error', err))
        
    },
    userListing:(req,res) => {
        console.log('userListing hit')
        
        const db = req.app.get('db');
        db.books_user_join(req.params.id).then(listing => {
            console.log('listing', listing)
            res.status(200).json({listing});
            
        })

    },

    // delete: ( req, res, next ) => {
    //     const db = req.app.get('db');
    //     const { id } = req.params; 
    //     db.delete_song(id).then((updateListAfterDeletion) => {
    //         res.status(200).json(updateListAfterDeletion);
    //     }).catch(err => console.log('error deleting listing', err));
    // },
    
}