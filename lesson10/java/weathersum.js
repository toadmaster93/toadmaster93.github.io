const weatherObject = new XMLHttpRequest();

weatherObject.open("GET","//api.openweathermap.org/data/2.5/weather?id=5604473&appid=cac6b26b0eda2898313a4f5ff6e7ab94&units=imperial", true)
weatherObject.send();
weatherObject.onload = function() {
    let weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
}
