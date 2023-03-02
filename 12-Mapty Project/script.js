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
let mapE;
let map;

class App
{
  #mapE;
  #map;
  constructor()
  {
    this._getPosition();
    form.addEventListener("submit",this._newWorkout.bind(this))
    inputType.addEventListener("change",this._toggleElevationField)
  }
  _getPosition()
  {
    if(navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),
    
    function()
    {
        // console.log("error");
        alert("could not get your co-ords")
    })
    };
  }
  _loadMap(position)
  {
    console.log(this);
      let {latitude,longitude}=position.coords
      let url = `https://www.google.com/maps/@${latitude},${longitude}`;
    
      let cordinates=[latitude,longitude];
      this.#map = L.map('map').setView(cordinates, 14);
    
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);
    
    this.#map.on("click",this._showForm.bind(this));
    
    L.marker(cordinates).addTo(this.#map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
    
  }
  _showForm(mapEvent)
  {
    this.#mapE=mapEvent;
    inputDistance.focus();
    form.classList.remove("hidden");
  }
  _toggleElevationField()
  {
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
  }
  _newWorkout(e)
  {
    inputDistance.value=inputCadence.value=inputDuration.value=inputElevation.value='';
    e.preventDefault();
    console.log(this);
    let {lat,lng}=this.#mapE.latlng;
    L.marker([lat,lng]).addTo(this.#map)
      .bindPopup(L.popup({
        maxWidth:100,
        minWidth:100,
        autoClose:false,
        closeOnClick:false,
        className:"running-popup"
      }))
      .setPopupContent("Walking")
      .openPopup();
  }
}

let app=new App();

console.log(map);


