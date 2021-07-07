let express = require('express');
let app = express();
let path = require('path');

let port = 7000;

app.use(express.static('public'));

app.listen(port,()=> console.log(`Port running in ${port}\nAbrir en el navegador http://localhost:${port}`));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/home.html'))
})