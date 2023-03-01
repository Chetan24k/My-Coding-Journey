'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
console.log(map);
if(navigator.geolocation)
{
navigator.geolocation.getCurrentPosition(function(position)
{
  let {latitude,longitude}=position.coords
  let url = `https://www.google.com/maps/@${latitude},${longitude}`;

  let cordinates=[latitude,longitude];
  let map = L.map('map').setView(cordinates, 14);

L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

map.on("click",function(mapE)
{

  form.classList.remove("hidden");
  
})

L.marker(cordinates).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
},
function()
{
    // console.log("error");
    alert("could not get your co-ords")
})
};
form.addEventListener("submit",function(e)
{
  e.preventDefault();

  let {lat,lng}=mapE.latlng;
  L.marker([lat,lng]).addTo(map)
    .bindPopup(L.popup({
      maxWidth:100,
      minWidth:100,
      autoClose:false,
      closeOnClick:false,
      className:"running-popup"
    }))
    .setPopupContent("Walking")
    .openPopup();
})
inputType.addEventListener("change",function(e)
{
  inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
  inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
})