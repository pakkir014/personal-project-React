import mongoose from "mongoose";
import express from "express"
import postRoutes from './routes/Posts.js'

const DATABASE_URL = `mongodb+srv://root:root@cluster0.js06qbj.mongodb.net/test`
const app = express();
const port = 5001;

app.use(express.json())

app.use("/", postRoutes);


mongoose.connect( DATABASE_URL, (err) => {
    if (err) {
        console.log('Error connecting to database')
    } else {
        app.listen(port, () => {
            console.log(`Server started on port ${port}`)
        })
    }
})

