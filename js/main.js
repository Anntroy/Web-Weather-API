var form = new FormData();
var settings = {
    "url": "http://api.openweathermap.org/data/2.5/find?q=London&units=metric&appid=6e2d128b93c24dad81aa2c3bb912b429",
    "method": "GET",
    "timeout": 0,
    "processData": false,
    "mimeType": "multipart/form-data",
    "contentType": false,
    "data": form
};

$.ajax(settings).done(function (response) {
    let cloudData = (JSON.parse(response).list)[0].clouds.all;
    let windData = (JSON.parse(response).list)[0].wind.speed;
    let humidityData = (JSON.parse(response).list)[0].main.humidity;
    let weatherDescription = (JSON.parse(response).list)[0].weather[0].description;
    let weatherIcon = (JSON.parse(response).list)[0].weather[0].icon;

    $('#cloudyData').text(`${cloudData}%`);
    $('#windyData').text(`${windData}`);
    $('#humidityData ').text(`${humidityData}%`);
    $('.weatherDescription').text(`${weatherDescription}`).css('text-transform', 'capitalize');

    chooseWeatherIcon(weatherIcon);
});

function chooseWeatherIcon(icon){
    switch (icon) {
        case '01d':
            $('#weatherIcon').addClass('pe-7w-sun');
            console.log($('#weatherIcon'))
            break;
        case '02d':
            $('#weatherIcon').addClass('pe-7w-cloud-sun');
            console.log($('#weatherIcon'))
            break;
        case '03d':
            $('#weatherIcon').addClass('pe-7w-cloud');
            console.log($('#weatherIcon'))
            break;
        case '04d':
            $('#weatherIcon').addClass('pe-7w-cloud-wind');
            console.log($('#weatherIcon'))
            break;
        case '09d':
            $('#weatherIcon').addClass('pe-7w-drizzle-alt');
            console.log($('#weatherIcon'))
            break;
        case '10d':
            $('#weatherIcon').addClass('pe-7w-drizzle-alt-sun');
            console.log($('#weatherIcon'))
        break;
        case '11d':
            $('#weatherIcon').addClass('pe-7w-lightning');
            console.log($('#weatherIcon'))
        break;
        case '13d':
            $('#weatherIcon').addClass('pe-7w-snow-alt');
            console.log($('#weatherIcon'))
        break;
        case '50d':
            $('#weatherIcon').addClass('pe-7w-fog');
            console.log($('#weatherIcon'))
        break;
        default:
            console.log($('#weatherIcon'))
    }
}