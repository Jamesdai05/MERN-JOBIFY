import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema=mongoose.Schema;

const userSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match: [/^\S+@\S+\.\S+$/, "Please provide a valid email"], //let mongoose to validate the email type.
    },
    password:{
        type:String,
        required:true,
        minlength: 6,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    location:{
      type:String,
      default:"Singapore",
    },
    avatar: {
      type: String,
      default: "/uploads/default-2.jpg", // Default image path
    },
    avatarId: {
      type: String,
    },
},{timestamps:true})


// since we use this key word here, the function declaration should be used.
userSchema.methods.matchPassword=async function(inputPassword){
  return await bcrypt.compare(inputPassword,this.password)
}

// before saving to database, hash the password.
userSchema.pre("save",async function(next){
  if(!this.isModified("password")){
    next();//skip it the password is not changed
  }

  const salt=await bcrypt.genSalt(10);
  this.password=await bcrypt.hash(this.password,salt)

})



const User=mongoose.model("User",userSchema)
export default User;