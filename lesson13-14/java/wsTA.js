const weatherObject3 = new XMLHttpRequest();

weatherObject3.open("GET","//api.openweathermap.org/data/2.5/weather?zip=85718&appid=cac6b26b0eda2898313a4f5ff6e7ab94&units=imperial", true)
weatherObject3.send();
weatherObject3.onload = function() {
    let weatherInfo = JSON.parse(weatherObject3.responseText);
    console.log(weatherInfo);

    document.getElementById("ConditionTA").innerHTML = weatherInfo.weather[0].main;
    document.getElementById("TemperatureTA").innerHTML = weatherInfo.main.temp;
    document.getElementById("WindSpeedTA").innerHTML = weatherInfo.wind.speed;
    document.getElementById("HumidityTA").innerHTML = weatherInfo.main.humidity;

}
function windChill() {
    var tempF = parseFloat(document.getElementById("TemperatureTA").textContent);
    var speed = parseFloat(document.getElementById("WindSpeedTA").textContent);
    var chill = calculate(tempF, speed);

    if (tempF <= 50 && speed > 3) {
        document.getElementById('shouldTA').textContent = chill;
    } else {
        document.getElementById('shouldTA').textContent = "N/A";
    }
    
    }

function calculate(tempF, speed) {
    var Temperature = 35.74 + (0.6215 * tempF) - (35.75 * (Math.pow(speed, 0.16))) + (0.4275  * tempF * (Math.pow(speed, 0.16)));
    var wind = Temperature.toFixed(0);
    return wind; 
}