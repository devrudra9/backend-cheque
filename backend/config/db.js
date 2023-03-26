import mongoose from 'mongoose';

const connectToMongo = async () => {
    const res = await mongoose.connect("mongodb://localhost:27017/galleryDB");
    if(res) {
        console.log("Connected Successfully.");
    }
}

export default connectToMongo;