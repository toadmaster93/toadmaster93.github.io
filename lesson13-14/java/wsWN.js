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
function windChill() {
    var tempF = parseFloat(document.getElementById("TemperatureWN").textContent);
    var speed = parseFloat(document.getElementById("WindSpeedWN").textContent);
    var chill = calculate(tempF, speed);

    if (tempF <= 50 && speed > 3) {
        document.getElementById('shouldWN').textContent = chill;
    } else {
        document.getElementById('shouldWN').textContent = "N/A";
    }
    
    }

function calculate(tempF, speed) {
    var Temperature = 35.74 + (0.6215 * tempF) - (35.75 * (Math.pow(speed, 0.16))) + (0.4275  * tempF * (Math.pow(speed, 0.16)));
    var wind = Temperature.toFixed(0);
    return wind; 
}