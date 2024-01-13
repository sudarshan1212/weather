const apiKey="26523a9edbcdae483b22161d0b2255fb"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchbox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")
weathericon=document.querySelector(".weather-icon")
init()
async function checkWeather(city){
 
const response=await fetch(apiUrl+city+`&appid=${apiKey}`)

if(response.status==404){
    // document.querySelectorAll(".col").style.display="none"
    none([".left",".right",".temp"])
    weathericon.src="./images/search.png"
    document.querySelector(".city").innerText="Invalid City Name"
    
  
}else{
    var data=await response.json()
    document.querySelector(".city").innerText=data.name
    document.querySelector(".temp").innerText=Math.floor(data.main.temp)+'°C'
    document.querySelector(".humidity").innerText=data.main.humidity+'%'
    document.querySelector(".wind").innerText=data.wind.speed+' Km/h'
    show([".left",".right",".temp",])
   if(data.weather[0].main=="Clouds"){
    weathericon.src="./images/clouds.png"
   }else if(data.weather[0].main=="Clear"){
    weathericon.src="./images/clouds.png"
   }else if(data.weather[0].main=="Rain"){
    weathericon.src="./images/rain.png"
   }else if(data.weather[0].main=="Drizzle"){
    weathericon.src="./images/drizzle.png"
   }else if(data.weather[0].main=="Mist"){
    weathericon.src="./images/mist.png"
   }
}

}

 async function init(){
    const response=await fetch(apiUrl+"chennai"+`&appid=${apiKey}`)
    var data=await response.json()
    document.querySelector(".city").innerText=data.name
    document.querySelector(".temp").innerText=Math.floor(data.main.temp)+'°C'
    document.querySelector(".humidity").innerText=data.main.humidity+'%'
    document.querySelector(".wind").innerText=data.wind.speed+' Km/h'

}

function none(elements){
    elements.forEach(element => {
        document.querySelector(element).style.display="none"
    });
}

function show(elements){
    elements.forEach(element => {
        document.querySelector(element).style.display=""
    });
}
