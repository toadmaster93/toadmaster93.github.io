const weatherObject1 = new XMLHttpRequest();

weatherObject1.open("GET","//api.openweathermap.org/data/2.5/weather?zip=06032&appid=cac6b26b0eda2898313a4f5ff6e7ab94&units=imperial", true)
weatherObject1.send();
weatherObject1.onload = function() {
    let weatherInfo = JSON.parse(weatherObject1.responseText);
    console.log(weatherInfo);

    document.getElementById("ConditionHC").innerHTML = weatherInfo.weather[0].main;
    document.getElementById("TemperatureHC").innerHTML = weatherInfo.main.temp;
    document.getElementById("WindSpeedHC").innerHTML = weatherInfo.wind.speed;
    document.getElementById("HumidityHC").innerHTML = weatherInfo.main.humidity;

}
function windChill() {
    var tempF = parseFloat(document.getElementById("TemperatureHC").textContent);
    var speed = parseFloat(document.getElementById("WindSpeedHC").textContent);
    var chill = calculate(tempF, speed);

    if (tempF <= 50 && speed > 3) {
        document.getElementById('shouldHC').textContent = chill;
    } else {
        document.getElementById('shouldHC').textContent = "N/A";
    }
    
    }

function calculate(tempF, speed) {
    var Temperature = 35.74 + (0.6215 * tempF) - (35.75 * (Math.pow(speed, 0.16))) + (0.4275  * tempF * (Math.pow(speed, 0.16)));
    var wind = Temperature.toFixed(0);
    return wind; 
}