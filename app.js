const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const rootDir=require('./util/path');
const errorController=require('./controllers/error');
const successController=require('./controllers/products');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use('/contact-us',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','contact-us.html'));
})

app.post('/success',successController.success);

app.use(errorController.get404);

app.listen(3000);
