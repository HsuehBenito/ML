const express = require('express');
const path = require('path');
const app = express();

app.get('', (req,res) =>{
    res.send('/mercadoliebre'); 
});

app.get('/mercadoliebre', (req,res) =>{
    
    res.sendFile((__dirname + '/views/home.html'));
});

app.get('/crearcuenta', (req,res) =>{
    
    res.sendFile((__dirname + '/views/register.html'));
});

app.get('/ingresar', (req,res) =>{
    
    res.sendFile((__dirname + '/views/login.html'));
});

app.use(express.static(path.join(__dirname, './public')));  

app.listen(process.env.PORT || 3070, () => {
    console.log("Servidor ON");
});