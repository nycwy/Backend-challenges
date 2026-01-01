import mongoose from "mongoose";

const mongoURI = "mongodb://127.0.0.1:27017/testxyz";

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("mongodb connected successfully!");
    } catch (err) {
        console.error("mongodb connection error ", err);
        process.exit(1);
    }
}

export default connectDB;