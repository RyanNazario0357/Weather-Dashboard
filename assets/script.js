//City Information
var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')

//weather data
var apiKey = "2d80a4c01e2b180a34938f07bd6f6783";
var name = document.querySelector('.name');
var wind = docuument.querySelector('.wind');
var temp = document.querySelector(',temp');
var uvindex = document.querySelector('.unindex');
var humidity = document.querySelector('.humidity');
var searchInput = "";
var currentDate = moment().format("YYYY/M/D");


button.addEventListener('click', function() {
    console.log("button clicked")
    searchInput = $(".inputValue").val().trim();
    getLocation(searchInput);
});

function getLocation(searchInput){

    //Api fetch section
    var apiUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + searchInput + "&limit=1&appid+" + apiKey;
    fetch(apiUrl)
    .then(function(response) {
        if(response.ok){
            response.json().then(function(data){
                console.log(data)
                var lattitude = data[0].lat;
                var longitude = data[0].lon;
                city = data[0].name;
                var lattitudeStr = lattitude.toString();
                var longitudeStr = longitude.toString();
                getWeather(lattitudeStr, longitudeStr);
            });
        }
    });
};

function getWeather(lat, lon){
    var apiUrl = "https://api.openweathermap.org/date/2.5/oncall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,alerts&units=imperial&appid=" + apiKey;
    fetch (apiUrl).then(function(response){
        if(response.ok){
            response.json().then(function(data){
                console.log(data)

                var nameElement = $(".name");
                nameElement.text(city.toUpperCase()+ currentDate);
                var tempElement = $(".temp");
                tempElement.text(data.current.temp);
            })
        }
    })
}