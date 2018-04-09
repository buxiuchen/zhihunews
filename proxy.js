const http=require('http');
const request=require('request');


const hostname='127.0.0.1';
const port=8010;
const imgport=8011;
//创建一个api代理服务
const apiServer=http.createServer((req,res)=>{
        const url="https://news-at.zhihu.com/api/4"+req.url;
        console.log(url);
        const options={
            url:url
        };  
        function callback(error,response,body){
            if(!error && response.statusCode==200){
                res.setHeader('Content-Type','text/plain;charset=UTF-8');
                res.setHeader('Access-Control-Allow-Origin','*');
                res.end(body);
            }
        }
        request.get(options,callback);
});
//监听ip和端口
apiServer.listen(port,hostname,()=>{
    console.log('接口运行在http://'+hostname+':'+port);
});


const imgServer=http.createServer((req,res)=>{
    const url=req.url.split('/img/')[1];
    console.log(url);
    const options={
        url:url,
        encoding:null
    };  
    function callback(error,response,body){
        if(!error && response.statusCode==200){
            const contentType=response.headers['content-type'];
            res.setHeader('Content-Type','text/plain;charset=UTF-8');
            res.setHeader('Access-Control-Allow-Origin','*');
            res.end(body);
        }
    }
    request.get(options,callback);
});
//监听ip和端口
imgServer.listen(imgport,hostname,()=>{
console.log('图片代理运行在http://'+hostname+':'+imgport);
});