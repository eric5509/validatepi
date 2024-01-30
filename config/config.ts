import mongoose from 'mongoose'

export const ConnectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL as string)
        console.log('Connected to Database')
    } catch (error) {
        console.log(error)
    }
}