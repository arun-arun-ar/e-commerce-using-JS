import mongoose from "mongoose";


//creating a user schema 
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required : true
    },
    email: {
        type: String,
        required : true,
        unique: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please provide a valid email address.']
    },
    password: {
        type:String,
        required : true
    },
    isAdmin: {
        type: Boolean,
        required : true,
        default: false
    }
},
{
    timestamps: true
})


//creating user model 
const User = mongoose.model('User', userSchema)


//export user model
export default User;