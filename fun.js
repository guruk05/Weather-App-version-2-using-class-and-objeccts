const key = '2ebbc925a11c3ea05fe72bb48f8ad49d';

class Weather{
    constructor(city) {
        this.city = city;
    }
    getWeather = () => {
        this.city = document.getElementById('cityName').value;
        
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + key) 
        .then(function (resp) {
          return resp.json()
        }) // Convert data to json
        .then(function (data) {
          // console.log(data);
          drawWeather(data); 
        })
        .catch(function () {
            console.log("Unable to Connect : Error")
        });
    }
}