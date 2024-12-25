import mongoose from "mongoose"

export const connectMongoDB = async  () => {
    
    mongoose.connect("mongodb+srv://admin:<123!>@cluster0.xklmw.mongodb.net/")

    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err)); 
    
}
