let airSpan = document.createElement("span")
let tempSpan = document.createElement("span")
let citySpan = document.createElement("span")
const geolocaDiv = document.querySelector("#geolocationInfo")

function onGeoSuccess(position) {
    let lat = Math.floor(position.coords.latitude);
    let lon = Math.floor(position.coords.longitude);
    console.log(lat, lon)
    
    const serviceKey = 'bd8617a96c9fb01ca5def927dbd4a161';

    const air_pollutionUrl= `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${serviceKey}`;
    const curWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${serviceKey}`;
    
    const pm_2_5 = getDataWeatherAPIcall(curWeatherUrl)
    airSpan.innerText= pm_2_5.list[0].components.pm2_5;
    // 75 > 매우 나쁨   / 좋음
    const weatherInfo = getDataWeatherAPIcall(air_pollutionUrl)
    citySpan.innerText = weatherInfo.name;
    tempSpan.innerText = weatherInfo.weather[0].main.temp;

    geolocaDiv.appendChild(airSpan);
    geolocaDiv.appendChild(tempSpan);
    geolocaDiv.appendChild(citySpan);

}
function onGeoError(){
    alert("Opps, we cann't get your POS.")
}

function getDataWeatherAPIcall(url){
    
    console.log(url);
    fetch(url).then(res=>res.json())
    .then(data => {console.log(data.name);
    }).catch(e=>console.log(e));
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

 



 
 