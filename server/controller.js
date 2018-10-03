module.exports = {
    read: ( req, res, next ) => {
        const db = req.app.get('db');
        db.view_all_books().then(response=>{
            res.status(200).json(response);
        })
    },

}