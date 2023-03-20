'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const renderCountry=function(data)
{
    let html=`<article class="country">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(data.population/1000000).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
        <p class="country__row"><span>💰</span>${data.currencies}</p>
        </div>
    </article>`
    countriesContainer.insertAdjacentHTML("beforeend",html);
    countriesContainer.style.opacity=1;
}

// const getCountry=function(country)
// {
//     const request=new XMLHttpRequest();
//     request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
//     request.send();
//     request.addEventListener("load",function()
//     {
//         const [data]=JSON.parse(this.responseText);
//         console.log(data);
//         renderCountry(data);
//         let neighbour=data.borders[0];
//         const request=new XMLHttpRequest();
//         request.open('GET',`https://restcountries.com/v3.1/alpha/${neighbour}`);
//         request.send();
//         request.addEventListener("load",function()
//         {
//             const [data]=JSON.parse(this.responseText);
//             renderCountry(data);
//         })
        
//     })
// }
// getCountry("india");
// // getCountry("china");



// let getCountryData=function(country)
// {
//     const getJSON=function(url,errorMsg="this is not a country")
//     {
//        return fetch(url)
//         .then(function(response)
//         {
//             // console.log(response.json());
//             if(!response.ok)
//             {
//                 throw new Error(errorMsg);
//             }
//             return response.json();
//         })
//     }
//     getJSON(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function(data)
//     {
//         renderCountry(data[0]);
//         return getJSON(`https://restcountries.com/v3.1/alpha/${data[0].borders[0]}`);
//     })
//     .then(function(data)
//     {
//         renderCountry(data[0]);
//     })
//     .catch(function(error)
//     {
//         console.log(error);
//     }) 
// }
// let getCountryData=function(country)
// {
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function(response)
//     {
//         // console.log(response.json());
//         if(!response.ok)
//         {
//             throw new Error(`country not found`);
//         }
//         return response.json();
//     })
//     .then(function(data)
//     {
//         renderCountry(data[0]);
//         return fetch(`https://restcountries.com/v3.1/alpha/${data[0].borders[0]}`)
//     })
//     .then(function(response)
//     {
//         return response.json();
//     })
//     .then(function(data)
//     {
//         renderCountry(data[0]);
//     })
//     .catch(function(error)
//     {
//         console.log(error);
//     }) 
// }



// let rs=  fetch(`https://restcountries.com/v3.1/name/india`);
// console.log(rs);

function getPosition()
{
    return new Promise(function(resolve,reject)
    {
         navigator.geolocation.getCurrentPosition(resolve, reject);
    })
}
   
async function getCountryData()
{
    try
    {
    //getting the current countries data
    let cords= await getPosition()
    console.log(cords);
    let {latitude,longitude}=cords.coords;
    console.log(latitude,longitude);
    //reverse geocoding
    let location=await fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`);
    let country=await location.json();


    //rendering the current country
    let response=await fetch(`https://restcountries.com/v3.1/name/${country}`);
    if(!response.ok) throw new Error ("problem getting location");
    let data= await response.json();
    renderCountry(data[0]);

    // fetch(`https://restcountries.com/v3.1/name/${country}`).then((response)=>console.log(response);)
   console.log(response);
   return data[0].country;
    }
    catch(error)
    {
        console.log(error.message);
    }
}
// bc("india");
console.log("hii");

btn.addEventListener("click",function()
{
    getCountryData("portugal");
})
// try
// {
//     const a=2;
//     a=3;
// }
// catch(error)
// {
//     console.log(error.message);
// }
const getJSON=function(url,errorMsg="this is not a country")
    {
       return fetch(url)
        .then(function(response)
        {
            // console.log(response.json());
            if(!response.ok)
            {
                throw new Error(errorMsg);
            }
            return response.json();
        })
    }
let getcapital=async function(c1,c2,c3)
{
//   let res= await getCountryData("india");
let result=await Promise.all(
   [
     getJSON(`https://restcountries.com/v3.1/name/${c1}`),
getJSON(`https://restcountries.com/v3.1/name/${c2}`),
getJSON(`https://restcountries.com/v3.1/name/${c3}`)
]
);
console.log(result);
    // let data1=getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // let data2=getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // let data3=getJSON(`https://restcountries.com/v3.1/name/${c3}`);
  
}
getcapital("india","pakistan","usa");