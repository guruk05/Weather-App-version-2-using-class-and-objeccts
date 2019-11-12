class Weather {
    getWeather = async () => {
        let cityName;
        const key = '2ebbc925a11c3ea05fe72bb48f8ad49d'
        cityName = $( "#cityName" ).val();
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`)
        const data = await response.json();
        weatherData.showWeather(data);
    }
    showWeather = (data) => {
        let celsius = Math.round(parseFloat(data.main.temp) - 273.15);
        let fahrenheit = Math.round(((parseFloat(data.main.temp) - 273.15) * 1.8) + 32);
        let description = data.weather[0].description;
        let country = data.sys.country;
        let iconcode = data.weather[0].icon;
        let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        // console.log(iconurl);
        $('#description').html(description);
        $('#showDegree').html(celsius);
        $('#showCity').html(data.name);
        $('#showCountry').html(country);
        $('#icon').attr("src",iconurl);
        console.log(iconurl)
        // $('#weatherIcon').src(iconurl);
        // document.getElementById('weatherIcon').src = iconurl;
        $('.Celsius').on('click',() => {
            $('#showDegree').html(fahrenheit);
            $('#showFahrenheit').html('&deg;' + 'F');
        });
        $('#showFahrenheit').dblclick(() => {
            $('#showDegree').html(celsius);
            $('#showFahrenheit').html('&deg;' + 'C');    
        });
    }    
}

let weatherData = new Weather();



  
