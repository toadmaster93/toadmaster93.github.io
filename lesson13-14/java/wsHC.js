const weatherObject1 = new XMLHttpRequest();

weatherObject1.open("GET","//api.openweathermap.org/data/2.5/weather?zip=06032&appid=cac6b26b0eda2898313a4f5ff6e7ab94&units=imperial", true)
weatherObject1.send();
weatherObject1.onload = function() {
    let weatherInfo = JSON.parse(weatherObject1.responseText);
    console.log(weatherInfo);

    document.getElementById("ConditionHC").innerHTML = weatherInfo.weather[0].main;
    document.getElementById("TemperatureHC").innerHTML = weatherInfo.main.temp;
    document.getElementById("WindSpeedHc").innerHTML = weatherInfo.wind.speed;
    document.getElementById("HumidityHC").innerHTML = weatherInfo.main.humidity;

}