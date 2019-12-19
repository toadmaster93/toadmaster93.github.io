const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-temples.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  


  const temples = jsonObject['temples'];

  for (let i = 0; i < temples.length; i++ ) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let p5 = document.createElement('p');
    let p6 = document.createElement('p');
    let p7 = document.createElement('p');

    let image = document.createElement('img');
    
    h2.textContent = temples[i].name;
    p1.textContent = "Address: " + temples[i].address;
    p2.textContent = "Telephone Number: " + temples[i].phone;
    p3.textContent = "Email: " + temples[i].email;
    p4.textContent = "Services: " + temples[i].services;
    p5.textContent = "Ordinance schedule: " + temples[i].ordinanceSchedule;
    p6.textContent = "Session Schedule: " + temples[i].sessionSchedule;
    p7.textContent = "Closure Schedule: " + temples[i].closureSchedule;
    image.setAttribute('src', temples[i].imgurl);
    image.setAttribute('alt', temples[i].name);  
    
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
    card.appendChild(p5);
    card.appendChild(p6);
    card.appendChild(p7);
    card.appendChild(image);
    
    document.querySelector('div.cards').appendChild(card);

   }
  });