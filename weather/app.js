async function getWeather(event) {

    event.preventDefault()

    let API_KEY = "26ae9a0b27a97215beaa4b5df9aa15fb"

    let cityName = document.querySelector("#search").value

    try {

        
        let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);


        console.log(response.data);
 document.querySelector("#p").innerText = 
 
 `City Name : ${ response.data.name }
 Weather: ${response.data.main.temp} °C 
 Min Temperature:${ response.data.main.temp_min}
 Max Temperature:${ response.data.main.temp_max}
 `
//  document.querySelector("#weather").innerText = response.data.main.temp
//  document.querySelector("#a").innerText = response.data.main.humidity
//  document.querySelector("#b").innerText = response.data.main.temp_min
//  document.querySelector("#c").innerText = response.data.main.temp_max
    } catch (error) {
        console.log(error);
    }

}