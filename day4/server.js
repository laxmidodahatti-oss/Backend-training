const express=require("express");
const app=express();
require("dotenv").config()
const port = process.env.port
const mongoose=require("mongoose");

const Notebook = require("./model/notes")

const {createAccount, login}=require("./controller/user")
const {createNotebook, getNotes,updateNotebook,deleteNotebook}=require("./controller/notes")

app.use(express.json());

app.post("/signin",createAccount);
app.post("/login",login)
app.post("/CreateNotebook",createNotebook);
app.get("/allNotes",getNotes)
app.put("/update/:id",updateNotebook)

app.delete("/api/delete-notes/:id",deleteNotebook);


mongoose.connect(process.env.mongo_url)
.then(()=>{
    console.log("database is connected")
    app.listen(port,()=>{
    console.log(`server is running port number ${port}`);
    })
})
.catch((e)=>{
    console.log("something went wrong",e);
})