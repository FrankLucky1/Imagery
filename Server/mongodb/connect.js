import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.set('strictQuery', true);

    mongoose.connect(url)
    .then(() => console.log('MongoDB is connected'))
    .catch((err) => {
        console.log(err)
        console.log('MongoDB not connected')
    });
}

export default connectDB;