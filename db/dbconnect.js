import mongoose from "mongoose";
const connection ={}
async function dbconnect(){
    if(connection.isConnected){
        return
    }
    const db =await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    connection.isConnected=db.connections[0].readyState
}
console.log("connected")
export default dbconnect