$("document").ready(function() {
    $(".btn-search").on("click", function() {
        let cityName = $("#citySearch").val();
        $.ajax({
            url : 'http://api.openweathermap.org/data/2.5/weather',
            data : {"q": cityName,"units":"metric","appid":"47eddf1ca8475b5d6bb078c9a3f5a4b5"},
            type : 'GET',
            dataType : 'json',
            // success 
            success : function(response) {
                console.log(response)
                $(".currentTempData").text(Math.round(response.main.temp));
                $(".minTemp").text(Math.round(response.main.temp_min) + "º");
                $(".maxTemp").text(Math.round(response.main.temp_max) + "º");
                $(".cityName").text(response.name + ", " + response.sys.country);
                let weekDay = getWeekDay (response.dt);
                let date = getDate (response.dt);
                let hour = getHour (response.dt, response.timezone);
                $(".currentWeekDay").text(weekDay)
                $(".currentDate").text(date);
                $(".currentHour").text(hour)
            }
            /* error : function(xhr, status) {
                alert('Disculpe, existió un problema');
            } */
        });
    }) //get city ID by searched menu
    

});

function getWeekDay (unix, timezone) {
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    console.log(unix)
    var date = new Date(unix * 1000);
    console.log(date);
    var weekDayNumber = date.getDay();
    var weekDay;
    let myWeekDays = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"]
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
    var myDate = monthDay + " " + monthName + ", " + year
    return myDate;
}

function getHour (unix, timezone) {
        // create Date object for current location
        var date = new Date(unix*1000 + timezone*1000);
        var hour = date.getHours();
        var minutes = date.getMinutes();
        minutes = 60 - minutes;
        console.log(hour);
        console.log(minutes);
        var myTime = hour + ":" + minutes;
        return myTime;
}