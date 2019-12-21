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