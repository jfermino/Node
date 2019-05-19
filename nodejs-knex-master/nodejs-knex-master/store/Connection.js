const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://dbadmin:Pos2019@cluster0-0rt54.mongodb.net/test?retryWrites=true'

const openConnection = () => mongoose.connect(connectionString)

module.exports = {
    openConnection,
}