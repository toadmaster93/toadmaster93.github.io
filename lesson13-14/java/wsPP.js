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
function windChill() {
    var tempF = parseFloat(document.getElementById("TemperaturePP").textContent);
    var speed = parseFloat(document.getElementById("WindSpeedPP").textContent);
    var chill = calculate(tempF, speed);

    if (tempF <= 50 && speed > 3) {
        document.getElementById('shouldPP').textContent = chill;
    } else {
        document.getElementById('shouldPP').textContent = "N/A";
    }
    
    }

function calculate(tempF, speed) {
    var Temperature = 35.74 + (0.6215 * tempF) - (35.75 * (Math.pow(speed, 0.16))) + (0.4275  * tempF * (Math.pow(speed, 0.16)));
    var wind = Temperature.toFixed(0);
    return wind; 
}