var fs = require('fs');

exports.getMime = function(extname){
   switch(extname){
        case '.html':
           return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/javascript';
        default:
            return 'text/html';
   }
}

exports.getFileMime = function(extname){
    //转node异步转同步promise实现读取文件
    // return new Promise((resolve,reject)=>{
    //     fs.readFile('./data/mime.json',(err,data)=>{
    //         if(err){
    //             console.log(err);
    //             reject(err);
    //             return;
    //         }
    //         let mimeObj = JSON.parse(data.toString());
    //         console.log(mimeObj[extname]);
    //         resolve(mimeObj[extname]);
    //     })
    // })
    // // 用另外一种同步的方法实现读取文件
    var data = fs.readFileSync('./data/mime.json');//同步方法
    let mimeObj = JSON.parse(data.toString());
    return mimeObj[extname];
}