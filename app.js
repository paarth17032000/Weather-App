window.addEventListener('load', () => {
    const cityName = document.querySelector('#city-name');
    const countryCode = document.querySelector('#country-code');
    const temp = document.querySelector('#temp');
    const description = document.querySelector('#description');
    const text = document.querySelector('.display');
    let lat;
    let long;

    if(navigator.geolocation.getCurrentPosition(position => {
        console.log(position);
        lat = position.coords.latitude;
        long = position.coords.longitude;
        const query = 'https://cors-anywhere.herokuapp.com/';

        async function weather(){
            // let req = await fetch(`${query}api.openweathermap.org/data/2.5/weather?lat=28.627926&lon=79.804176&appid=865f8cbe25935bdf57994df98209420b`);
            let req = await fetch(`${query}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=865f8cbe25935bdf57994df98209420b`);
            let res = await req.json();
            let data = res.data;
            console.log(data);
        }

        weather();
    }));
})