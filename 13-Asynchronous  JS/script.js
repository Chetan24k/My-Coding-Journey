'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const renderCountry=function(data)
{
    let html=`<article class="country">
        <img class="country__img" src="${data.flags.png
        }" />
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


let getCountryData=function(country)
{
    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function(response)
    {
        // console.log(response.json());
        if(!response.ok)
        {
            throw new Error(`country not found`);
        }
        return response.json();
    })
    .then(function(data)
    {
        renderCountry(data[0]);
        return fetch(`https://restcountries.com/v3.1/alpha/${data[0].borders[0]}`)
    })
    .then(function(response)
    {
        return response.json();
    })
    .then(function(data)
    {
        renderCountry(data[0]);
    });
}
getCountryData("india");
let rs=  fetch(`https://restcountries.com/v3.1/name/india`);
console.log(rs);
   