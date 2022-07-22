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

