import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
    {
        name : String,
        role: { type: String, enum: ['user', 'admin'], default: 'user' }, // user or admin
        email : String,
        password: String,
        propertiesSelected : [
            {
                building: String,
                flatNumber : Number,
                address : String,
            } 
        ]
    },
    {
        timestamps:true,
    }
)

const  UserModel = mongoose.model("User", UserSchema);
export default UserModel;