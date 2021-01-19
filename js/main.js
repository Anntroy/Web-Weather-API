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

    // console.log(typeof (JSON.parse(response).list)[0].weather[0].id)

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
            $('.body').css('background-image', "url('images/clear.jpg')");
            break;
        case '02d':
            $('#weatherIcon').addClass('pe-7w-cloud-sun');
            $('.body').css('background-image', "url('images/few_clouds.jpg')");
            break;
        case '03d':
            $('#weatherIcon').addClass('pe-7w-cloud');
            $('.body').css('background-image', "url('images/cloudy.jpg')");
            break;
        case '04d':
            $('#weatherIcon').addClass('pe-7w-cloud-wind');
            $('.body').css('background-image', "url('images/cloudy.jpg')");
            break;
        case '09d':
            $('#weatherIcon').addClass('pe-7w-drizzle-alt');
            $('.body').css('background-image', "url('images/rainy.jpg')");
            break;
        case '10d':
            $('#weatherIcon').addClass('pe-7w-drizzle-alt-sun');
            $('.body').css('background-image', "url('images/rainy.jpg')");
        break;
        case '11d':
            $('#weatherIcon').addClass('pe-7w-lightning');
            $('.body').css('background-image', "url('images/storm.jpg')");
        break;
        case '13d':
            $('#weatherIcon').addClass('pe-7w-snow-alt');
            $('.body').css('background-image', "url('images/cloudy.jpg')");
        break;
        case '50d':
            $('#weatherIcon').addClass('pe-7w-fog');
            $('.body').css('background-image', "url('images/cloudy.jpg')");
        break;
        default:
            $('.body').css('background-image', "url('images/clear.jpg')");
    }
}