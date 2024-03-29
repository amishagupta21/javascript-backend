import mongoose from "mongoose"

import { DB_NAME } from "../constants.js"

const connectDB = async () => {
    try {
       const connectonInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`mongoose checking connection || Database connectedy: ${connectonInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB_ERROR", error)
        process.exit(1)
    }
}
export default connectDB