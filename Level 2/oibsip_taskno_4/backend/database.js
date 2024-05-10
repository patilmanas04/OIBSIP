const mongoose = require('mongoose')

const mongoURI = 'mongodb://localhost:27017/UserAuthDB'

const connectToMongoDB = async() => {
    try{
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Connected to MongoDB!!")
    }
    catch(error){
        console.log("Failed to connect to MongoDB", error)
    }
}

module.exports = connectToMongoDB