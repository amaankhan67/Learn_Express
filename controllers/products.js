exports.addProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  }

exports.success = (req,res)=>{
    res.send('<h1>Form Sucessfully Filled!</h1>');
};