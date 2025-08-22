import dotenv from 'dotenv';
import mongoose from 'mongoose';


dotenv.config()

const connectionString=process.env.MONGODB_URI

const connectDB=async()=>{
    try {
        const dbConnect=await mongoose.connect(connectionString);
        const database=dbConnect.connection
        // console.log(dbConnect.connection)
        console.log(`connect to mongodb ${database.name} ${database.host}:${database.port}`);
    } catch (error) {
        console.log(`Error:${error.message}`)
        process.exit(1)
    }
}

connectDB()
// export default connectDB;