const express=require('express');

const router=express.Router();

router.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><br><input type="text" name="size"><br><button type="submit">Submit</button></form>')

})

module.exports=router;