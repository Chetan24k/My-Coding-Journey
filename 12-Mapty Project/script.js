'use strict';

// prettier-ignore

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let mapE;
let map;

class workout{
  date = new Date();
  id = (Date.now() + '').slice(-10);
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

constructor(coords,distance,duration)
{
  this.coords=coords;
  this.distance=distance;
  this.duration=duration;
}
setDescription()
  {
    this.description=`${this.type[0].toUpperCase()}${this.type.slice(1)} on ${this.months[this.date.getMonth()]} ${this.date.getDay()}`;
  }
  click()
  {
    this.clicks++;
  }
}

class running extends workout
{
  type="running";
  constructor(coords,distance,duration,cadence)
  {
    super(coords,distance,duration);
    this.cadence=cadence;
    this.setDescription();
    this.calcPace();
  }
  calcPace()
  {
    this.pace = this.duration/this.distance;
    return this.pace;
  }
  
}
class cycling extends workout
{
  type="cycling";
  constructor(coords,distance,duration,elevation)
  {
    super(coords,distance,duration);
    this.elevation=elevation;
    this.setDescription();
    this.calcSpeed();
  }
  calcSpeed()
  {
    this.speed=this.distance/this.duration;
    return this.speed;
  }
}

class App {
  #mapE;
  #map;
  #activity=[];
  #zoomlevel=14;
  constructor() {
    this._getPosition();
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener("click",this._moveMarker.bind(this));
    this._getLocalStorage();

  }
  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),

        function () {
          // console.log("error");
          alert('could not get your co-ords');
        }
      );
    }
  }
  _loadMap(position) {
    console.log(this);
    let { latitude, longitude } = position.coords;
    let url = `https://www.google.com/maps/@${latitude},${longitude}`;

    let cordinates = [latitude, longitude];
    this.#map = L.map('map').setView(cordinates, this.#zoomlevel);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));

    L.marker(cordinates)
      .addTo(this.#map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
      this.#activity.forEach(workout=>this._renderPopup(workout))
  }
  _showForm(mapEvent) {
    this.#mapE = mapEvent;
    inputDistance.focus();
    form.classList.remove('hidden');
  }
  _hideForm()
  {
    inputDistance.value =inputCadence.value =inputDuration.value =inputElevation.value =
        '';
        form.style.display="none";
        form.classList.add("hidden");
        setTimeout(()=>form.style.display="grid",1000);
  }
  _toggleElevationField() {
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  }
  _newWorkout(e) {

   const _validateInput=(...inputs)=>inputs.every(inp=>Number.isFinite(inp));
   const checkPositive=(...inputs)=>inputs.every(inp=>inp>0);
    e.preventDefault();
    //get data from app
    let workout;
    let { lat, lng } = this.#mapE.latlng;
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    //check if data is valid

    
    //create workout according to type
    if (type === 'running') {
      const cadence = +inputCadence.value;
      if(!_validateInput(distance,duration,cadence))return alert("enter positive number");
      if(!checkPositive(distance,duration,cadence))return alert("enter positive number")
      
      workout=new running([lat,lng],distance,duration,cadence);
      this.#activity.push(workout);
    }
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      if(!_validateInput(distance,duration,elevation))return alert("enter positive number");
      if(!checkPositive(distance,duration,elevation))return alert("enter positive number")
      
      workout=new cycling([lat,lng],distance,duration,elevation);
      this.#activity.push(workout);

    }
    this._renderPopup(workout);
    this._renderWorkout(workout);
    this._hideForm();
    this._setLocalStorage();
  
    //add new object to workout array

    //render workout on map as marker

    inputDistance.value =
      inputCadence.value =
      inputDuration.value =
      inputElevation.value =
        '';
   
    console.log(this);
    
  }
  _renderPopup(workout)
  {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 100,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(`${workout.type==="running"?"🏃‍♂️":"🚴‍♂️"}${workout.description}`)
      .openPopup();
  }
  _renderWorkout(workout)
  {
    let html=`
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
    <h2 class="workout__title">${workout.description}</h2>
    <div class="workout__details">
      <span class="workout__icon">${workout.type==="running"?"🏃‍♂️":"🚴‍♂️"}</span>
      <span class="workout__value">${workout.distance}</span>
      <span class="workout__unit">km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value">${workout.duration}</span>
      <span class="workout__unit">min</span>
    </div>
    `
    if(workout.type==="running")
    {
      html+=` <div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${workout.pace.toFixed(1)}</span>
      <span class="workout__unit">min/km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">🦶🏼</span>
      <span class="workout__value">${workout.cadence}</span>
      <span class="workout__unit">spm</span>
    </div>
  </li>`
    }
    if(workout.type==="cycling")
    {
      html+=`
      <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevation}/span>
            <span class="workout__unit">m</span>
          </div>
        </li> -->
      `
    }
    form.insertAdjacentHTML("afterend",html);
  }
  _moveMarker(e)
  {
    const workoutEl=e.target.closest(".workout");
    if(!workoutEl)return;
   const workout= this.#activity.find(work=>work.id===workoutEl.dataset.id);
    console.log(workout);
    this.#map.setView(workout.coords,this.#zoomlevel,{
      animate:true,
      pan:{
        duartion:1,
      },
    })
    this.workout.click();
  }
  _setLocalStorage(workout)
  {
    localStorage.setItem('workout',JSON.stringify(this.#activity));
  }
  _getLocalStorage()
  {
   const data=JSON.parse( localStorage.getItem("workout"));

   if(!data)return;
   this.#activity=data;
   this.#activity.forEach(work=>this._renderWorkout(work))
  }
}

let app=new App();

// console.log(map);


