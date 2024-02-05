const mongoose =require('mongoose');


const connectToDb = () => {
    return mongoose.connect(process.env.MONGODB-URL);
    
}

module.exports = connectToDb;   