const apiKey="79e45d114d543040657fc21cbfd74ce5";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=imperial&q="

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherPic = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();
    
    

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°f";

if (data.weather [0].main == "Clouds") { 
    weatherPic.src = "pics/cloudy.jpeg";
}
else if (data.weather [0].main == "Drizzle") { 
    weatherPic.src = "pics/drizzle.jpeg";
}
else if (data.weather [0].main == "mist") { 
    weatherPic.src = "pics/mist.jpeg";
}
else if (data.weather [0].main == "Rain") { 
    weatherPic.src = "pics/rain.jpeg";
}
else if (data.weather [0].main == "Snow") { 
    weatherPic.src = "pics/snow.webp";
}
else if (data.weather [0].main == "Clear") { 
    weatherPic.src = "pics/sunny.jpeg"; 
} 
document.querySelector(".error").style.display = "none";
document.querySelector(".weather").style.display = "block";
    } 
}  

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
