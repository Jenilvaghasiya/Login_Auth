const express = require('express')
const mongoose = require("mongoose")
const cors = require('cors')
const bcrypt = require('bcrypt')
const dotenv = require('dotenv')
const UserModel = require("./model/User");

dotenv.config();
const app = express()
app.use(express.json());

app.use(cors())

mongoose.connect(process.env.MONGO_URI)
    .then(() =>console.log("Connected to MongoDB...."))
    .catch(err => console.log("Failed Connection to MongoDB..",err))

app.post("/signup", async(req, res) => {
    try{
        const {name, email, password, city} = req.body;
        console.log(name+""+email+""+password+""+city)
        const existingUser = await UserModel.findOne({ email});
        console.log(existingUser)
        if(existingUser){
            return res.status(400).json({error:"Email Already Exists"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel({name, email, password : hashedPassword,city});
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch{
        res.status(500).json({error : error.message });
    }
});

app.post("/login", async(req, res) => {
    try{
        const {email, password, city} = req.body;
        const user = await UserModel.findOne({email});
        if(user){
            const passwordMatch = await bcrypt.compare(password, user.password);
            if(passwordMatch){
                res.json("Success")
            }else{
                res.status(401).json("Password Dose Not Match !");
            }
        }else{
            res.status(401).json("NO DATA");
        }
    }catch{
        res.status(500).json({error : error.message})
    }

})

    
app.listen(process.env.PORT,() => {
    console.log(`Server is Running on port ${process.env.PORT}`);
})

