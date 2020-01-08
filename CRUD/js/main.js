let app = require('./app').start(3000);

app.on('root', (response)=>{
    response.write("je suis à la racine ")
})
