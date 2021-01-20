$("document").ready(function() {
    getResponse('London');
    $("#citySearch").on("keypress", function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        let cityName = $("#citySearch").val();
        if(keycode == '13'){
            if(cityName === ''){
                cityName = 'London'
            }
            getResponse(cityName)
            $('#citySearch').val('');
        }
    })
});

function getResponse(input){
    $.ajax({
        url : 'http://api.openweathermap.org/data/2.5/weather',
        data : {"q": input,"units":"metric","appid":"47eddf1ca8475b5d6bb078c9a3f5a4b5"},
        type : 'GET',
        dataType : 'json',
        // success 
        success : function(response) {
            let cloudData = response.clouds.all;
            let windData = response.wind.speed;
            let humidityData = response.main.humidity;
            let weatherDescription = response.weather[0].description;
            let weatherIcon = response.weather[0].icon;
        
            $('#cloudyData').text(`${cloudData}%`);
            $('#windyData').text(`${windData}`);
            $('#humidityData ').text(`${humidityData}%`);
            $('.weatherDescription').text(`${weatherDescription}`).css('text-transform', 'capitalize');
        
            chooseWeatherIcon(weatherIcon);

            $(".currentTempData").text(Math.round(response.main.temp));
            $(".minTemp").text(Math.round(response.main.temp_min) + "º");
            $(".minTemp").prepend(`<i class="fas fa-long-arrow-alt-down"></i>`)
            $(".maxTemp").text(Math.round(response.main.temp_max) + "º");
            $(".maxTemp").prepend(`<i class="fas fa-long-arrow-alt-up"></i>`)
            $(".cityName").text(response.name + ", " + response.sys.country);
            let weekDay = getWeekDay (response.dt);
            let date = getDate (response.dt);
            let hour = getHour (response.dt, response.timezone);
            $(".currentWeekDay").text(weekDay)
            $(".currentDate").text(date);
            $(".currentHour").text(hour);

            let sunriseTime = getHour(response.sys.sunrise, response.timezone);
            let sunsetTime = getHour(response.sys.sunset, response.timezone);
            $(".sunriseTime").text(sunriseTime);
            $(".sunsetTime").text(sunsetTime);
        }
    });
}

function getWeekDay (unix, timezone) {
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    console.log(unix)
    var date = new Date(unix * 1000);
    console.log(date);
    var weekDayNumber = date.getDay();
    var weekDay;
    let myWeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    for (let index = 0; index < myWeekDays.length; index++) {
        if (index == weekDayNumber) {
            weekDay = myWeekDays[index];
        }
    }
    return weekDay;
}
function getDate (unix, timezone) {
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix * 1000);
    var monthDay = date.getDate();
    var monthNumber = date.getMonth();
    var monthName;
    let myMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    for (let index = 0; index < myMonth.length; index++) {
        if (index == monthNumber) {
            monthName = myMonth[index];
        }
    }
    var year = date.getFullYear()
    var myDate = ", " + monthDay + " " + monthName + ", " + year
    return myDate;
}

function getHour (unix, timezone) {
    var dateHour = new Date(unix*1000).toISOString();
    var dateMinutes = new Date(unix*1000);
    dateHour = new Date(dateHour);
    var offset = timezone / 60 / 60;
    dateHour.setHours(dateHour.getHours() + offset);
    var hour = dateHour.getHours() - 1;
    var minutes = dateMinutes.getMinutes();
    console.log(minutes);
    var time = hour + ":" + minutes;
    return time;
}
