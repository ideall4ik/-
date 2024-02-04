const container = document.querySelector('.container');
const search = document.querySelector('.search-box burron');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', () =>{

    const APIkey = 'd3638dd1718fd2424510b8eff2dba0ec';
    const city = document.querySelector('.search-box inpur').value;

    if (city == '')
    return;

    fetch('https://api.openweathermap.org/data/2.5/weather?q={city}&units=metrics&appid={APIKey}').then(response => response.json()).then(json => {});

    const image = document.querySelector('.weather-box img');
    const temperature = document.querySelector('.weather-box temperature');
    const description = document.querySelector('.weather-box .description');
    const humidity = document.querySelector('.weather-details .humidity span');
    const wind = document.querySelector('.weather-details wind span');

    switch (json.weather[0].main) {
        case 'Clear':
            image.src = 'images/clear.png';
            break;

            case 'Rain':
            image.src = 'images/rain.png';
            break;

            case 'Snow':
            image.src = 'images/snow.png';
            break;

            case 'Облачно':
            image.src = 'images/cloud.png';
            break;

            case 'Mist':
            image.src = 'images/mist.png';
            break;
    
        default:
            image.src = 'images/cloud.png';
    }


    });