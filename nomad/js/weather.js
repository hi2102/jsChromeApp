const API_KEY = '982cde333c179d4f95733381a24fa7e3';

function onGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

  fetch(url).then((response) => response.json()).then((data) => {
    const weather = document.querySelector('#weather span:first-child');
    const city = document.querySelector('#weather span:last-child');

    city.innerText = `${data.name}`;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp} /`;
  });
}

function onGeoError() {
  alert('can\'t find you. No weather for you.');
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);