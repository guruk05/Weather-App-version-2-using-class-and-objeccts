const key = '2ebbc925a11c3ea05fe72bb48f8ad49d'
let cityName;

class Weather{
    getWeather = (city) => {
        cityName = $( "#cityName" ).val();
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + key) 
        .then((resp) => {
          return resp.json()
        }) // Convert data to json
        .then((data) => {
            weatherData.showWeather(data);
          console.log(data);
        })
        .catch(() => {
        });
    }
    showWeather = (data) => {
        console.log(data);
        let celsius = Math.round(parseFloat(data.main.temp) - 273.15);
        let fahrenheit = Math.round(((parseFloat(data.main.temp) - 273.15) * 1.8) + 32);
        let description = data.weather[0].description;
        let country = data.sys.country;
        
        $('#showDescription').html(description);
        $('#showDegree').html(celsius);
        $('#showCity').html(data.name);
        $('#showCountry').html(country);



        // document.getElementById('showDescription').innerHTML = description;
        // document.getElementById('showDegree').innerHTML = celsius  
        // document.getElementById('showCity').innerHTML = data.name;
        // document.getElementById('showCountry').innerHTML = country;
    
        $('.Celsius').on('click', function() {
            document.getElementById('showDegree').innerHTML = fahrenheit;
            document.getElementById('showFahrenheit').innerHTML = '&deg;' + 'F';
        });
        
        $('#showFahrenheit').dblclick(function() {
            document.getElementById('showDegree').innerHTML = celsius;
            document.getElementById('showFahrenheit').innerHTML = '&deg;' + 'C';     
        });
    }    
}

  
let weatherData = new Weather();
weatherData.getWeather();


  
