const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const http = require('http');
const https = require('https');

var port = 4000;
var hostname = '127.0.0.1';
const url = 'https://covid19.mathdro.id/api';


let settings = { method:"Get" };

fetch(url).then(res=>res.json()).then(json=>console.log(json));



var server = http.createServer((req,res)=>{ 
    res.writeHead(200,{'Content-Type':'application/json'});
    //res.end(JSON.stringify(json));
});

server.listen(port,hostname,()=>{
    console.log(`Server running on http://${hostname}:${port}/`);
})



