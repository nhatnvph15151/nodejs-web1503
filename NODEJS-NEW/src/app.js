import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import mongoose from 'mongoose';
import productRoute from './routes/product'
const app = express();
app.use(morgan("tiny"));
app.use(express.json());
app.use(cors())

//router
app.use("/api", productRoute);

//connect db 
mongoose.connect("mongodb://localhost:27017/demo")
    .then(()=> console.log("connect db thanh cong"))
    .catch(error => console.log(error))
const POST= 8000;
app.listen(POST, ()=>{
    console.log(`server: ${POST}`)
})