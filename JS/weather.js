
const API_KEY = "5c38d35bbca20fb2b0d6ef8d7302b880"

function onGeoOk(position) {
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
  .then((response)  => response.json())
  .then((data) => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });
}

function onGeoError() {
  alert('사용자의 위치를 찾을 수 없습니다.')
}



//user의 위치를 알려주는 함수 사용
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)// 2개의 argument가 필요함
