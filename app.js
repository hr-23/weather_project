const express=require("express");
const https=require("https");
const app=express();

app.get("/",function(req,res){
    const url="https://api.openweathermap.org/data/2.5/weather?q=London&appid=ca5b3803bfae36fd241401ef6b68a3de&units=metric";
    https.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
             const weather_data= JSON.parse(data);
             const temp=weather_data.main.temp;
             console.log(temp);
             console.log(weather_data.name);
             console.log(weather_data.main.feels_like);
             console.log(weather_data.weather[0].description);
             const icon=weather_data.weather[0].description.icon;
             const imageURL="https://openweathermap.org/img/wn/"+icon+"@2x.png";
            // res.write("<img src="+imageurl+" ></img>");
             res.send("<h1>The temperature in "+weather_data.name+" is "+ temp+" degrees celcius</h1> <h2>The weather is currently "+weather_data.weather[0].description+" </h2>")
           /*  const obj={
                name:"Harshaa Reddy",
                fav_food:"Dosa"
             }
             console.log(JSON.stringify(obj));*/
        })
    }) 
          //res.send("this srever is running ")
})

app.listen(3000,function(){
    console.log("this is running at 3000");
})
