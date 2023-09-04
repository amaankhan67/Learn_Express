const express=require('express');
const bodyParser=require('body-parser');

const adminRouter=require('./admin');
const shopRouter=require('./shop');

const app=express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(adminRouter);

app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

app.use('/shop',shopRouter);

app.use((req,res,next)=>{
    res.status(404).send('<h1>The page you are loking for is not found</h1>');
})

app.listen(3000);