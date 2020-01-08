  let fs = require('fs')
  let http = require('http');
 const EventEmitter = require('events'); 
 let App= {
     start : function(port){
       let monEmeteur = new  EventEmitter()
        let serveur = http.createServer((request, response)=>{
            response.writeHead(200, {'Content-type':'text/html; charset=utf-8'})
            if(request.url==='/')
            {
                monEmeteur.emit('root', response)
            }
            response.end()
        }).listen(port)
        return monEmeteur;
     }
 }
 module.exports = App

//  let app = App.start(3000);

// app.on('root', (response)=>{
//     response.write("je suis à la racine ")
// })