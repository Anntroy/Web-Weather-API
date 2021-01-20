var form = new FormData();
var settings = {
    "url": link,
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
            $('#weatherIcon').addClass('pe-7w-sun').addClass('.weatherIcon');
            $('.body').css('background-image', "url('images/clear.jpg')");
            break;
        case '02d':
            $('#weatherIcon').addClass('pe-7w-cloud-sun').addClass('.weatherIcon');
            $('.body').css('background-image', "url('images/few_clouds.jpg')");
            break;
        case '03d':
            $('#weatherIcon').addClass('pe-7w-cloud').addClass('.weatherIcon');
            $('.body').css('background-image', "url('images/cloudy.jpg')");
            break;
        case '04d':
            $('#weatherIcon').prepend(`<i class="pe-7w-cloud-wind weatherIcon"></i>`);
            $('.body').css('background-image', "url('images/cloudy.jpg')");
            break;
        case '09d':
            $('#weatherIcon').prepend(`<i class="pe-7w-drizzle-alt weatherIcon"></i>`);
            $('.body').css('background-image', "url('images/rainy.jpg')");
            break;
        case '10d':
            $('#weatherIcon').prepend(`<i class="pe-7w-drizzle-alt-sun weatherIcon"></i>`);
            $('.body').css('background-image', "url('images/rainy.jpg')");
        break;
        case '11d':
            $('#weatherIcon').prepend(`<i class="pe-7w-lightning weatherIcon"></i>`);
            $('.body').css('background-image', "url('images/storm.jpg')");
        break;
        case '13d':
            $('#weatherIcon').prepend(`<i class="pe-7w-snow-alt weatherIcon"></i>`);
            $('.body').css('background-image', "url('images/cloudy.jpg')");
        break;
        case '50d':
            $('#weatherIcon').prepend(`<i class="pe-7w-fog weatherIcon"></i>`);
            $('.body').css('background-image', "url('images/cloudy.jpg')");
        break;
        default:
            $('#weatherIcon').prepend(`<i class="pe-7w-cloud-sun weatherIcon"></i>`);
            $('.body').css('background-image', "url('images/clear.jpg')");
    }
}