const express = require('express');
const app = express();
const fs = require('fs');

app.get("/",(req,res)=>{
    fs.readFile("jokes.json",(err,data)=>{
        if(err){
            console.log(err);
        }else{
            const user = JSON.parse(data);
            console.log(user.length);
            let num = Math.floor(Math.random() * (1000 - 0 + 1) + 0);
            console.log(num);
            console.log(user[num].body);
            res.send(user[num]);
        }
    })
})

app.listen(3000,()=>{
    console.log("App Running on http://localhost:3000 ");
})