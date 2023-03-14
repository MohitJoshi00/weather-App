const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1bb8ed7acemshc20b3fbf976a5d8p1c10c4jsn0e3affe3c69c',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=> {
	cityName.innerHTML= "Weather of " +city

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) => {
		// console.log(response)

		cloud_pct.innerHTML = response.cloud_pct;
		feels_like.innerHTML = response.feels_like;
		humidity.innerHTML = response.humidity;
		humidity2.innerHTML = response.humidity;
		max_temp.innerHTML = response.max_temp;
		min_temp.innerHTML = response.min_temp;
		sunrise.innerHTML = response.sunrise;
		sunset.innerHTML = response.sunset;
		temp.innerHTML = response.temp;
		temp2.innerHTML = response.temp;
		wind_degrees.innerHTML = response.wind_degrees;
		wind_speed.innerHTML = response.wind_speed;
		wind_speed2.innerHTML = response.wind_speed;

		console.log(cloud_pct.innerHTML)
	})
	.catch(err => console.error(err));

}

	submit.addEventListener("click", (e)=>{
e.preventDefault();
if(!city.value){
	warningText.style.display = "block"
}
else{
	getWeather(city.value)
	searchCity.style.transform = "translateY(0px)";
	cardContainer.style.display = "flex";
	warningText.style.display = "none"

}
	})