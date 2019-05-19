const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    produtoId: {
        type: String
    },
    autor: {
        type: String
    },
    comentario:{
        type: String
    }
});
const Comment = mongoose.model('dbComentarios', commentSchema,'listCometarios');
module.exports = Comment
