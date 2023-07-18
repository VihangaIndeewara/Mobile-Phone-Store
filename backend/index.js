const express=require('express');
const mongoose=require('mongoose')
const cors=require('cors')
const CustomerRoute=require('../backend/routes/CustomerRoute')
const app=express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(
    "mongodb://127.0.0.1:27017/mobilephonestore"
).then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server Running on Port ${PORT}`)
    })
})

app.use('/api/customer',CustomerRoute)
 
