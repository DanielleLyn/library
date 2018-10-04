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
            res.status(200).json({message: 'book created!'})
        }).catch(err => console.log('create book error', err))
    }

    // delete: ( req, res, next ) => {
    //     const db = req.app.get('db');
    //     const { id } = req.params; 
    //     db.delete_song(id).then((updateListAfterDeletion) => {
    //         res.status(200).json(updateListAfterDeletion);
    //     }).catch(err => console.log('error deleting listing', err));
    // },
    // getSong: (req,res) => {
    //     console.log('****')
    //     const db = req.app.get('db');
    //     const {id} = req.params
    //     db.view_song(id).then(response => {
    //         res.status(200).json(response);
    //     })
    // },
}