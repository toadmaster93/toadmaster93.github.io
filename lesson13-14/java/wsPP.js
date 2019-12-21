const weatherObject2 = new XMLHttpRequest();

weatherObject2.open("GET","//api.openweathermap.org/data/2.5/weather?zip=19103&appid=cac6b26b0eda2898313a4f5ff6e7ab94&units=imperial", true)
weatherObject2.send();
weatherObject2.onload = function() {
    let weatherInfo = JSON.parse(weatherObject2.responseText);
    console.log(weatherInfo);

    document.getElementById("ConditionPP").innerHTML = weatherInfo.weather[0].main;
    document.getElementById("TemperaturePP").innerHTML = weatherInfo.main.temp;
    document.getElementById("WindSpeedPP").innerHTML = weatherInfo.wind.speed;
    document.getElementById("HumidityPP").innerHTML = weatherInfo.main.humidity;

}