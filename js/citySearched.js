/* var url;
url = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities"
const settings = {
	"async": true,
	"crossDomain": true,
	"url": url,
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a461a728eamsh5f7108d3a63b8aap11da4ajsn0551d63324e7",
		"x-rapidapi-host": "wft-geo-db.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
   settings.url = "https://wft-geo-db.p.rapidapi.com" + response.links[1].href;
   $.ajax(settings).done(function (response) {
      console.log(response);
      settings.url = "https://wft-geo-db.p.rapidapi.com" + response.links[1].href;
   });
});
 */
  /*  let offset = 0;
   const settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://wft-geo-db.p.rapidapi.com/v1/geo/cities?offset="+offset+"&limit=5",
      "method": "GET",
      "headers": {
         "x-rapidapi-key": "a461a728eamsh5f7108d3a63b8aap11da4ajsn0551d63324e7",
         "x-rapidapi-host": "wft-geo-db.p.rapidapi.com"
      }
   };
   while (offset<10) {
      settings.url = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities?offset="+offset+"&limit=5"
      $.ajax(settings).done(function (response) {
         console.log(response);
      });
      offset = offset + 5;
   } */
   $("document").ready(function() {
      $("#citySearch").on("keyup", function() {
         let namePrefix = $("#citySearch").val()
         $.ajax({
             url : 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
             data : {"namePrefix":namePrefix, "limit":3},
             type : 'GET',
             dataType : 'json',
             headers: {
              "x-rapidapi-key": "a461a728eamsh5f7108d3a63b8aap11da4ajsn0551d63324e7",
              "x-rapidapi-host": "wft-geo-db.p.rapidapi.com"
           },
             // success
             success : function(response) {
                console.log(response)
               $("#myCities").children().remove();
               $("#myCities").css("display", "block")
                for (let index = 0; index < response.data.length; index++) {
                   let cityFinded = $(`<li class="myCitiesFinded"></li>`);
                   cityFinded.text(response.data[index].city + ", " + response.data[index].country);
                   cityFinded.data("latitude", response.data[index].latitude);
                   cityFinded.data("longitude", response.data[index].longitude);
                   $("#myCities").append(cityFinded);
                   cityFinded.on("click", function() {
                      $("#citySearch").val(cityFinded.text());
                      let lon = cityFinded.data("longitude");
                      let lat = cityFinded.data("latitude");
                      $("#myCities").css("display", "none");
                      getResponse(cityFinded.text());
                   })

                }
             }
             /* error : function(xhr, status) {
                 alert('Disculpe, existió un problema');
             } */
         });
      //}) //get city ID by searched menu
      
  });
   });