$("#cityForm").submit(function(event){ 
    event.preventDefault();

    var cityName = $("#cityname").val();
    getCurrentWeather(cityName);  
});

/* Add api to call weather by city */
function getCurrentWeather(city){
    $.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid=c8314d38e6d7113010ca48868ea8b8dd", function(data){
      console.log(data);

        $("#city").html(data.main.name);
        $("#description").html(data.weather[0].description);
        $("#icon").html("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");
        $("#temp").html("Temperatue: " + data.main.temp + " °F");
        $("#humidity").html("Humidity: " + data.main.humidity + "%");
        $("#windSpeed").html("Wind Speed: " + data.wind.speed + " mph");
    });
    /* Add api to call 5-day forecast */
    $.get("http://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=imperial&appid=c8314d38e6d7113010ca48868ea8b8dd", function(data){
    console.log(data);

/* Added variables for moment .js, and api to display each day of 5-day forecast date, icon, temp, and humidity */
/* 1 */
  var firstDay = moment().format("M/D/YYYY");
  var firstDayIcon = data.list[0].weather[0].icon;
  var firstDayImage = "http://openweathermap.org/img/wn/" + firstDayIcon + ".png";
  var dayOneImageSrc = $("<img>").attr("src", firstDayImage);
  var firstDayTemp = data.list[0].main.temp + " °F";
  var firstDayTempFar = (firstDayTemp - 273.15) * 1.8 + 32;
  var firstDayTempFixed = firstDayTempFar.toFixed(1); 
  var firstDayHum = data.list[0].main.humidity + "%";

/* DISPLAY and APPEND FIRST DAY DATA */
  var FirstDayDateEl = $("<p>").text(firstDay);
  var FirstDayImageEl = $("<p>").text(firstDayIcon);
  var FirstDayTempEl = $("<p>").text("Temp: " + firstDayTemp);
  var FirstDayHumEl = $("<p>").text("Humidity: " + firstDayHum);

    $(".firstDay").append(FirstDayDateEl);
    $(".firstDay").append(FirstDayImageEl);
    $(".firstDay").append(FirstDayTempEl);
    $(".firstDay").append(FirstDayHumEl);

/* 2 */
  var secondDay = moment().add(1, "days").format("M/D/YYYY");
  var secondDayIcon = data.list[8].weather[0].icon;
  var secondDayImage = "http://openweathermap.org/img/wn/" + secondDayIcon + ".png";
  var secondDayImageSrc = $("<img>").attr("src", secondDayImage);
  var secondDayTemp = data.list[8].main.temp + " °F";
  var secondDayTempFar = (secondDayTemp - 273.15) * 1.8 + 32;
  var secondDayTempFixed = secondDayTempFar.toFixed(1); 
  var secondDayHum = data.list[8].main.humidity + "%";

/* DISPLAY and APPEND SECOND DAY DATA */
  var secondDayDateEl = $("<p>").text(secondDay);
  var secondDayImageEl = $("<p>").text(secondDayIcon);
  var secondDayTempEl = $("<p>").text("Temp: " + secondDayTemp);
  var secondDayHumEl = $("<p>").text("Humidity: " + secondDayHum);

    $(".secondDay").append(secondDayDateEl);
    $(".secondDay").append(secondDayImageEl);
    $(".secondDay").append(secondDayTempEl);
    $(".secondDay").append(secondDayHumEl);

/* 3 */
  var thirdDay = moment().add(2, "days").format("M/D/YYYY");
  var thirdDayIcon = data.list[16].weather[0].icon;
  var thirdDayImage = "http://openweathermap.org/img/wn/" + thirdDayIcon + ".png";
  var thirdDayImageSrc = $("<img>").attr("src", thirdDayImage);
  var thirdDayTemp = data.list[16].main.temp + " °F";
  var thirdDayTempFar = (thirdDayTemp - 273.15) * 1.8 + 32;
  var thirdDayTempFixed = thirdDayTempFar.toFixed(1); 
  var thirdDayHum = data.list[16].main.humidity + "%";

/* DISPLAY and APPEND THIRD DAY DATA */
  var thirdDayDateEl = $("<p>").text(thirdDay);
  var thirdDayImageEl = $("<p>").text(thirdDayIcon);
  var thirdDayTempEl = $("<p>").text("Temp: " + thirdDayTemp);
  var thirdDayHumEl = $("<p>").text("Humidity: " + thirdDayHum);

    $(".thirdDay").append(thirdDayDateEl);
    $(".thirdDay").append(thirdDayImageEl);
    $(".thirdDay").append(thirdDayTempEl);
    $(".thirdDay").append(thirdDayHumEl);

/* 4 */
  var fourthDay = moment().add(3, "days").format("M/D/YYYY");
  var fourthDayIcon = data.list[24].weather[0].icon;
  var fourthDayImage = "http://openweathermap.org/img/wn/" + fourthDayIcon + ".png";
  var fourthDayImageSrc = $("<img>").attr("src", fourthDayImage);
  var fourthDayTemp = data.list[24].main.temp + " °F";
  var fourthDayTempFar = (fourthDayTemp - 273.15) * 1.8 + 32;
  var fourDayTempFixed = fourthDayTempFar.toFixed(1); 
  var fourthDayHum = data.list[24].main.humidity + "%";

/* DISPLAY and APPEND FOURTH DAY DATA */
  var fourthDayDateEl = $("<p>").text(fourthDay);
  var fourthDayImageEl = $("<p>").text(fourthDayIcon);
  var fourthDayTempEl = $("<p>").text("Temp: " + fourthDayTemp);
  var fourthDayHumEl = $("<p>").text("Humidity: " + fourthDayHum);

    $(".fourthDay").append(fourthDayDateEl);
    $(".fourthDay").append(fourthDayImageEl);
    $(".fourthDay").append(fourthDayTempEl);
    $(".fourthDay").append(fourthDayHumEl);

/* 5 */
  var fifthDay = moment().add(4, "days").format("M/D/YYYY");
  var fifthDayIcon = data.list[32].weather[0].icon;
  var fifthDayImage = "http://openweathermap.org/img/wn/" + fifthDayIcon + ".png";
  var fifthDayImageSrc = $("<img>").attr("src", fifthDayImage);
  var fifthDayTemp = data.list[32].main.temp + " °F";
  var fifthDayTempFar = (fifthDayTemp - 273.15) * 1.8 + 32;
  var fifthDayTempFixed = fifthDayTempFar.toFixed(1); 
  var fifthDayHum = data.list[32].main.humidity + "%";

/* DISPLAY and APPEND FIFTH DAY DATA */
  var fifthDayDateEl = $("<p>").text(fifthDay);
  var fifthDayImageEl = $("<p>").text(fifthDayIcon);
  var fifthDayTempEl = $("<p>").text("Temp: " + fifthDayTemp);
  var fifthDayHumEl = $("<p>").text("Humidity: " + fifthDayHum);

    $(".fifthDay").append(fifthDayDateEl);
    $(".fifthDay").append(fifthDayImageEl);
    $(".fifthDay").append(fifthDayTempEl);
    $(".fifthDay").append(fifthDayHumEl);

})
}
/* Added moment.js for current day's date */
  var currentDate = moment().format('M/D/YYYY');
  var mainDate = document.getElementById('currentDay');
  date.innerHTML = currentDate;

  