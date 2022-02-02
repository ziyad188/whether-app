// console.log("starting")
// // this is an example of asynchronous program here we can change the order of execution one of the method is setTimeout
// setTimeout(()=>{
//     console.log("hi");
// }, 2000)
// setTimeout(()=>{
//     console.log('0 timer');
// },0);

const express = require("express");
const bodyParser= require("body-parser");
const ejs = require("ejs")
const http = require("http");
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
var temp,place,time,des,icon,pl,speed,humidity,pressure,visiblity;

app.get("/", function(req, res){
    const apiId = "100884c544e15a3401e8d35207a5a0f1";
    const url = "http://api.weatherstack.com/current?access_key="+apiId+"&query="+"london"+"&units=m"
    http.get(url, function(response){ 
        console.log(response.statusCode);
        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            console.log(weatherData);
            temp = weatherData.current.temperature;
            place =weatherData.location.name;
            time = weatherData.location.localtime;
            des = weatherData.current.weather_descriptions;
            icon = weatherData.current.weather_icons;
            speed = weatherData.current.wind_speed;
            humidity = weatherData.current.humidity;
            pressure = weatherData.current.pressure;
            visiblity = weatherData.current.visibility;
            res.render("index",{stemp: temp,place: place,time:time,des:des,icon:icon,humidity: humidity,wind:speed,visiblity:visiblity,pressure:pressure});
        })

    })
    
});
app.post("/", function(req, res){
    const apiId = "100884c544e15a3401e8d35207a5a0f1";
    const place = req.body.location;
    const url = "http://api.weatherstack.com/current?access_key="+apiId+"&query="+place+"&units=m"
    http.get(url, function(response){
        
        console.log(response.statusCode);
        
        response.on("data", function(data){
            console.log(data);
            const weatherData = JSON.parse(data);
            if(weatherData.success != "false"){
                temp = weatherData.current.temperature;
            pl = weatherData.location.name;
            time = weatherData.location.localtime;
            des = weatherData.current.weather_descriptions;
            icon = weatherData.current.weather_icons;
            speed = weatherData.current.wind_speed;
            humidity = weatherData.current.humidity;
            pressure = weatherData.current.pressure;
            visiblity = weatherData.current.visibility;
            res.render("index",{stemp: temp,place: pl,time:time,des:des,icon:icon,humidity: humidity,wind:speed,visiblity:visiblity,pressure:pressure});
            }else{
                res.redirect("/");
            }
            
        })
        
    });
    
})
app.post("/c", function(req,res){
    if(req.body.b ==="Birmingham"){
        res.redirect("/bir")
    }else if(req.body.m ==="Manchester"){
        res.redirect("/man")
    }else if(req.body.n ==="New York"){
        res.redirect("/new")
    }else{
        res.redirect("/cal")
    }
});
app.get("/bir", function(req,res){
    const apiId = "100884c544e15a3401e8d35207a5a0f1";
    const place = "Birmingham";
    const url = "http://api.weatherstack.com/current?access_key="+apiId+"&query="+place+"&units=m"
    http.get(url, function(response){
        
        console.log(response.statusCode);
        response.on("data", function(data){
            console.log(data);
            const weatherData = JSON.parse(data);
            console.log(weatherData);
            temp = weatherData.current.temperature;
            pl = weatherData.location.name;
            time = weatherData.location.localtime;
            des = weatherData.current.weather_descriptions;
            icon = weatherData.current.weather_icons;
            speed = weatherData.current.wind_speed;
            humidity = weatherData.current.humidity;
            pressure = weatherData.current.pressure;
            visiblity = weatherData.current.visibility;
            res.render("index",{stemp: temp,place: place,time:time,des:des,icon:icon,humidity: humidity,wind:speed,visiblity:visiblity,pressure:pressure});
        })
        
    });
})
app.get("/man", function(req,res){
    const apiId = "100884c544e15a3401e8d35207a5a0f1";
    const place = "Manchester";
    const url = "http://api.weatherstack.com/current?access_key="+apiId+"&query="+place+"&units=m"
    http.get(url, function(response){
        
        console.log(response.statusCode);
        response.on("data", function(data){
            console.log(data);
            const weatherData = JSON.parse(data);
            console.log(weatherData);
            temp = weatherData.current.temperature;
            pl = weatherData.location.name;
            time = weatherData.location.localtime;
            des = weatherData.current.weather_descriptions;
            icon = weatherData.current.weather_icons;
            speed = weatherData.current.wind_speed;
            humidity = weatherData.current.humidity;
            pressure = weatherData.current.pressure;
            visiblity = weatherData.current.visibility;
            res.render("index",{stemp: temp,place: place,time:time,des:des,icon:icon,humidity: humidity,wind:speed,visiblity:visiblity,pressure:pressure});
        })
        
    });
})
app.get("/new", function(req,res){
    const apiId = "100884c544e15a3401e8d35207a5a0f1";
    const place = "New York";
    const url = "http://api.weatherstack.com/current?access_key="+apiId+"&query="+place+"&units=m"
    http.get(url, function(response){
        
        console.log(response.statusCode);
        response.on("data", function(data){
            console.log(data);
            const weatherData = JSON.parse(data);
            console.log(weatherData);
            temp = weatherData.current.temperature;
            pl = weatherData.location.name;
            time = weatherData.location.localtime;
            des = weatherData.current.weather_descriptions;
            icon = weatherData.current.weather_icons;
            speed = weatherData.current.wind_speed;
            humidity = weatherData.current.humidity;
            pressure = weatherData.current.pressure;
            visiblity = weatherData.current.visibility;
            res.render("index",{stemp: temp,place: place,time:time,des:des,icon:icon,humidity: humidity,wind:speed,visiblity:visiblity,pressure:pressure});
        })
        
    });
})
app.get("/cal", function(req,res){
    const apiId = "100884c544e15a3401e8d35207a5a0f1";
    const place = "California";
    const url = "http://api.weatherstack.com/current?access_key="+apiId+"&query="+place+"&units=m"
    http.get(url, function(response){
        
        console.log(response.statusCode);
        response.on("data", function(data){
            console.log(data);
            const weatherData = JSON.parse(data);
            console.log(weatherData);
            temp = weatherData.current.temperature;
            pl = weatherData.location.name;
            time = weatherData.location.localtime;
            des = weatherData.current.weather_descriptions;
            icon = weatherData.current.weather_icons;
            speed = weatherData.current.wind_speed;
            humidity = weatherData.current.humidity;
            pressure = weatherData.current.pressure;
            visiblity = weatherData.current.visibility;
            res.render("index",{stemp: temp,place: place,time:time,des:des,icon:icon,humidity: humidity,wind:speed,visiblity:visiblity,pressure:pressure});
        })
        
    });
})



app.listen(process.env.PORT ||3000, function(){
    console.log("server is running in port 3000");
});