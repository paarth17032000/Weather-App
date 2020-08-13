window.addEventListener('load', () => {
//     DOM content selected 
     const cityName = document.querySelector('#city-name');
    const countryCode = document.querySelector('#country-code');
    const temp = document.querySelector('#temp');
    const description = document.querySelector('#description');
    let lat;
    let long;
// navigator.geolocation , a function of js helps to know longitude and latitude of user's location  
// location should be enabled by the user
    if(navigator.geolocation.getCurrentPosition(position => {
// grabing latitude's and longitude's coordinates to pass in the api 
        lat = position.coords.latitude;
        long = position.coords.longitude;
// help to reach api's url
        const query = 'https://cors-anywhere.herokuapp.com/';
// function defined
        async function weather(){
// fetching api by passing in latitude and longitude and making a request
// This api is taken from openweather.org and it is free
            let req = await fetch(`${query}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=865f8cbe25935bdf57994df98209420b`);
// Converting delivered request into JSON
            let res = await req.json();
// using data from api to deliver the desired output to user
            cityName.textContent = res.name;
            countryCode.textContent = res.sys.country;
            temp.innerHTML = `${res.main.temp}<sup>&#8451;</sup>`;
            description.textContent = res.weather[0].main;
        }
// function called
        weather();
    }));
})
