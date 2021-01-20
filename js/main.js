function chooseWeatherIcon(icon){
    switch (icon.substr(0, 2)) {
        case '01':
            $('#weatherIcon').removeAttr('class');
            $('#weatherIcon').addClass('pe-7w-sun').addClass('weatherIcon');
            $('.body').css('background-image', "url('images/clear.jpg')");
            break;
        case '02':
            $('#weatherIcon').removeAttr('class');
            $('#weatherIcon').addClass('pe-7w-cloud-sun').addClass('weatherIcon');
            $('.body').css('background-image', "url('images/few_clouds.jpg')");
            break;
        case '03':
            $('#weatherIcon').removeAttr('class');
            $('#weatherIcon').addClass('pe-7w-cloud').addClass('weatherIcon');
            $('.body').css('background-image', "url('images/cloudy.jpg')");
            break;
        case '04':
            $('#weatherIcon').removeAttr('class');
            $('#weatherIcon').addClass('pe-7w-cloud-wind').addClass('weatherIcon');
            $('.body').css('background-image', "url('images/cloudy.jpg')");
            break;
        case '09':
            $('#weatherIcon').removeAttr('class');
            $('#weatherIcon').addClass('pe-7w-drizzle-alt').addClass('weatherIcon');
            $('.body').css('background-image', "url('images/rainy.jpg')");
            break;
        case '10':
            $('#weatherIcon').removeAttr('class');
            $('#weatherIcon').addClass('pe-7w-drizzle-alt-sun').addClass('weatherIcon');
            $('.body').css('background-image', "url('images/rainy.jpg')");
        break;
        case '11':
            $('#weatherIcon').removeAttr('class');
            $('#weatherIcon').addClass('pe-7w-lightning').addClass('weatherIcon');
            $('.body').css('background-image', "url('images/storm.jpg')");
        break;
        case '13':
            $('#weatherIcon').removeAttr('class');
            $('#weatherIcon').addClass('pe-7w-snow-alt').addClass('weatherIcon');
            $('.body').css('background-image', "url('images/cloudy.jpg')");
        break;
        case '50':
            $('#weatherIcon').removeAttr('class');
            $('#weatherIcon').addClass('pe-7w-fog').addClass('weatherIcon');
            $('.body').css('background-image', "url('images/cloudy.jpg')");
        break;
        default:
            $('#weatherIcon').removeAttr('class');
            $('#weatherIcon').addClass('pe-7w-cloud-sun').addClass('weatherIcon');
            $('.body').css('background-image', "url('images/clear.jpg')");
    }
}