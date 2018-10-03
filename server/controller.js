module.exports = {
    read: ( req, res, next ) => {
        const db = req.app.get('db');
        db.view_all_books().then(response=>{
            res.status(200).json(response);
        })
    },
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