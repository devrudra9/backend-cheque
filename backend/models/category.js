import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema ({
    name: {
        type: String,
    }
});

const catogoryModel = mongoose.model('category', categorySchema);

export default catogoryModel;