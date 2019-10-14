const key = '2ebbc925a11c3ea05fe72bb48f8ad49d';
let cityName = document.getElementById('cityName').value; 
let cityWeather;

class Weather{
    constructor(city){
        this.city = city;
    }
    getWeather = () => {
        // this.city = cityWeather;
        // cityWeather = this.city; 
        // console.log(cityWeather);
        // fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + key) 
        // .then((resp) => {
        //   return resp.json()
        // }) // Convert data to json
        // .then((data) => {
        //     weatherData.showWeather(data);
        //   console.log(data);
        // })
        // .catch(() => {
        //     console.log("Unable to Connect : Error")
        // });
    }
    showWeather = (d) => {
        // console.log(d);
        let celsius = Math.round(parseFloat(d.main.temp) - 273.15);
        let description = d.weather[0].description;
        let country = d.sys.country;

        document.getElementById('showDescription').innerHTML = description;
        document.getElementById('showDegree').innerHTML = celsius  
        document.getElementById('showCity').innerHTML = d.name;
        document.getElementById('showCountry').innerHTML = country;
    
        $('.Celsius').on('click', function () {
            let fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);
            console.log(fahrenheit);
            document.getElementById('showDegree').innerHTML = fahrenheit;
            document.getElementById('showFahrenheit').innerHTML = '&deg;' + 'F';
        });
        
        $('#showFahrenheit').dblclick(function() {
            let celcius = Math.round(parseFloat(d.main.temp) - 273.15);
            document.getElementById('showDegree').innerHTML = celcius;
            document.getElementById('showFahrenheit').innerHTML = '&deg;' + 'C'; 
        });
    }    
}


let weatherData = new Weather(cityName);
weatherData.getWeather();




