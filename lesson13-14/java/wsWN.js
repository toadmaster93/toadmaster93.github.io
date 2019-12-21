const weatherObject4 = new XMLHttpRequest();

weatherObject4.open("GET","//api.openweathermap.org/data/2.5/weather?zip=68112&appid=cac6b26b0eda2898313a4f5ff6e7ab94&units=imperial", true)
weatherObject4.send();
weatherObject4.onload = function() {
    let weatherInfo = JSON.parse(weatherObject4.responseText);
    console.log(weatherInfo);

    document.getElementById("ConditionWN").innerHTML = weatherInfo.weather[0].main;
    document.getElementById("TemperatureWN").innerHTML = weatherInfo.main.temp;
    document.getElementById("WindSpeedWN").innerHTML = weatherInfo.wind.speed;
    document.getElementById("HumidityWN").innerHTML = weatherInfo.main.humidity;

}