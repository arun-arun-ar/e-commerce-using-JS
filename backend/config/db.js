import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database Connected Succesfully");
        
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
}

export default connectDB;