function windChill() {
    var tempF = parseFloat(document.getElementById("Temperature").textContent);
    var speed = parseFloat(document.getElementById("WindSpeed").textContent);
    var chill = calculate(tempF, speed);

    if (tempF <= 50 && speed > 3) {
        document.getElementById('should').textContent = chill;
    } else {
        document.getElementById('should').textContent = "N/A";
    }
    
    }

function calculate(tempF, speed) {
    var Temperature = 35.74 + (0.6215 * tempF) - (35.75 * (Math.pow(speed, 0.16))) + (0.4275  * tempF * (Math.pow(speed, 0.16)));
    var wind = Temperature.toFixed(0);
    return wind; 
}