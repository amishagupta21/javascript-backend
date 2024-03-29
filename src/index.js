// require('dotenv').config({path:"./env"})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./env"
})

connectDB()
    .then(() => {
        app.on("error", (err) => {
            console.log("error", err)
            throw error;
        })
        app.listen(process.env.PORT || 8000, () => {
            console.log(`server is running on ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log("Mongodb_conncetion failed :", err)
    })









// import express from "express"
// const app = express()
// ;(async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//          app.on("error",(error)=>{
//             console.log("not able to talk",error)
//             throw err
//          })
//          app.listen(process.env.PORT,()=>{
//             console.log(`server is running on this ${process.env.PORT}`)
//          })

//     }
//     catch (error) {
//         console.error("error", error)
//         throw err
//     }
// })()