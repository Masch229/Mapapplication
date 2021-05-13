const express = require('express')
const path = require('path')
const app = express()
const multer = require('multer');
const upload = multer({dest: __dirname + './uploads/images'});

app.use(express.static('./public'))

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname),'./navbar-app/index.html')
})

app.all('*', (req, res)=>{
    res.status(404).send('resource not found')
})

app.use(express.static('public'));

app.post('/uploads', upload.single('photo'), (req, res) => {
    if(req.file) {
        res.json(req.file);
    }
    else throw 'error';
});



app.listen(5000, ()=> {
    console.log('Server is listening on Port 5000')
})
