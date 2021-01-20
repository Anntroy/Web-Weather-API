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
   let offset = 0;
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
   }
