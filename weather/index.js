const APIKEY = "d54b108e96c80d6717d844eba8dad9a6",
URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const city = document.getElementById("city");
const showBtn = document.getElementById("showBtn");


async function fetchWeather(city)
{
    const res = await fetch(URL + city + `&appid=${APIKEY}`);
    let data = await res.json();
    console.log(data)
    document.querySelector("#cityName").innerHTML = data?.name || "city";
    document.querySelector("#country").innerHTML = data.sys.country;
    console.log(data.sys.country)
    document.querySelector("#temp").innerHTML = Math.floor(data.main.temp) + "°c";
    document.querySelector("#wind").innerHTML = data.wind.speed + " Km/h";
    document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
}

showBtn.addEventListener("click", ()=>
{
    fetchWeather(city.value)
})
city.addEventListener("keyup", (e)=>
{
    if (e.key == "Enter") 
    {
        fetchWeather(city.value)
    }
})

