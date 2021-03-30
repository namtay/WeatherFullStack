const express = require('express');
const cors = require('cors');
let request= require('request');

const app= express();

const port=5000
app.use(cors())

app.get('/',(req,res)=>{
    res.send("Hello World");
})


app.get('/getWeatherghana',(req,res)=>{
    request("http://api.weatherstack.com/current?access_key=c35bd6fa1aaa625a8031329c6a694091&query=Accra",
    function (error,response,body){
        if(!error&&response.statusCode==200){
            let parsedBody=JSON.parse(body)
            let temperature=parsedBody['current']['temperature']
            let region=parsedBody['location']['region']
            res.send({region,temperature})
        }
    })
})
app.listen(port,()=>console.log("Express app is listening"));