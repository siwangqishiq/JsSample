var http = require('http');

var server = http.createServer();

server.on('request' , (req , res)=>{
    res.setHeader('Content-Type' , 'text/plain;charset=utf-8');
    res.write('Hello World! 你好世界!');
    res.end();
});

server.listen(8888,(error)=>{
    if(error)
        return;
    console.log('service statrt port 8888 ...');
});