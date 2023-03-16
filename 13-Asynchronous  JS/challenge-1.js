let whereAmI=function(lat,lng)
{
    // fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    fetch(`https://geocode.xyz/52.508,13.381?geoit=json`)
    .then(function(response)
    {
        return response.json();
    })
    .then(function(data)
    {
        console.log(data);
        // console.log(`you are in ${data.}`);
    })
}
whereAmI(52.502,13.381);
// // let res= fetch(`https://geocode.xyz/lat=52.508,lng=13.381?geoit=json`);
// // console.log(res);

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
// 		'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com'
// 	}
// };
// const whereAmI=function(lat,lng)
// {
//     fetch(`https://google-maps-geocoding.p.rapidapi.com/geocode/json?latlng=${lat}%2C${lng}&language=en`, options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
// }
// whereAmI(52.502,13.381);