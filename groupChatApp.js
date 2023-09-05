const express=require('express');
const fs=require('fs');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended:false}));

app.use('/login',(req,res,next)=>{
    res.send(`<form onsubmit="localStorage.setItem('username',document.getElementById('username').value)" action="/" method="GET"><input type="text" name="username" id="username"><br><button type="submit">Login</button></form>`);
    });

app.get("/",(req,res,next)=>{
        fs.readFile('./message.txt',(err,data)=>
        {
            if(err){
                console.log(err);
                data='No Chat Found!!';
            }
            res.send(`${data}<form onsubmit="document.getElementById('username').value=localStorage.getItem('username')" action="/" method="POST"><input type="hidden" name="username" id="username"><input type="text" name="message" id="message"><br><button type="submit">Send</button></form>`)

        })
    });

app.post("/",(req,res,next)=>
{
    fs.appendFile('./message.txt',`${req.body.username}:${req.body.message}\n`,(err)=>{
            if(err)
                console.log(err);
            else
                console.log('File Append Successful');
    });
    res.redirect("/");
})

app.listen(3000);