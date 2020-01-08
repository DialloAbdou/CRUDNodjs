// let http = require('http');
// const EventEmitter = require('events');
let demo= require('./index')
demo()

//  let App= {
//      start : function(port){
//        let monEmeteur = new  EventEmitter()
//         let serveur = http.createServer((request, response)=>{
//             response.writeHead(200, {'Content-type':'text/html; charset=utf-8'})
//             if(request.url==='/')
//             {
//                 monEmeteur.emit('root', response)
//             }
//             response.end()
//         }).listen(port)
//         return monEmeteur;
//      }
//  }
// let app = App.start(3000);

// app.on('root', (response)=>{
//     response.write("je suis à la racine ")
// })
// // ecocuteur.once('saute',(a, b)=>{
//     console.log(`j'ai sauté `, a, b)
// })
// ecocuteur.emit('saute',10,10)
// let fs = require('fs')
// let url = require('url')
// let serveur = http.createServer((req, res)=>{
// let urlpars = url.parse(req.url,true).query

//     fs.readFile('index.html','UTF-8',(err, data)=>{
//          if(err)
//          {
//             res.writeHead(404, {'content-type':'text/html','Content-encoding':'utf-8'})
//             res.end('404 File not found')
//          }else{
//              res.writeHead(200, {'content-type':'text/html','Content-encoding':'utf-8'})
//              let name= urlpars.name===undefined ? Anonyme : urlpars.name
//              data = data.replace('{name}',name)
//              res.end(data)
//          }
//     })
// })
// serveur.listen(3000)
