fetch("//api.openweathermap.org/data/2.5/forecast?id=5604473&appid=cac6b26b0eda2898313a4f5ff6e7ab94&units=imperial")
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        
        let forecast = [];
        let icon = [];
        let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
        let list = jsObject.list;
        console.log(list);
        let day = 1;
        let ico = 1;
        let d = 1;

        var weekday = new Array(7);
              weekday[0] = "Sunday";
              weekday[1] = "Monday";
              weekday[2] = "Tuesday";
              weekday[3] = "Wednesday";
              weekday[4] = "Thursday";
              weekday[5] = "Friday";
              weekday[6] = "Saturday";
            
    for (let i = 1; i <=5; i++) {

      jsObject.list.forEach(x => {
          if (x.dt_txt.includes('18:00:00')) {
              forecast[day] = x.main.temp.toFixed(0);
              day++;
              icon[ico] = x.weather[0].icon;
              ico++;

              days[d] = new Date(x.dt_txt);
              thedayname = weekday[days[i].getDay()  ];
              d++;
          
      let imagesrc = '//openweathermap.org/img/w/' + icon[i] + '.png';
      document.getElementById("Wimage" + i).setAttribute('src', imagesrc);
      document.getElementById("forecast" + i).innerHTML = forecast[i];
      document.getElementById('day' + i).innerHTML = thedayname;
       
    }});

    }});
