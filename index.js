function handleKeys(evt)
   {
      if(evt.keyCode === 13) /*13 is the keyCode for the 'Enter' key*/
      {
        climate();
      }
   }

   document.addEventListener('keydown', handleKeys, true);

function climate(){
    place=search.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=b41ec3be35c7dac8aabbc21ba253137a`).then(data=>data.json()).then(data=>displayData(data))
}
function displayData(data){
    let currentDate = new Date();
    hours = ('0' + currentDate.getHours()).slice(-2)
    minutes = ('0' + currentDate.getMinutes()).slice(-2)
    let time = hours + ":" + minutes ;
    placeName=data.name
    temperature=Math.round(data.main.temp-273.15)
    condition=data.weather[0].main
    humidity=data.main.humidity
    speed=data.wind.speed
    cover.innerHTML=`   <div class="search p-4 ">
    <input id="search" type="text" class="form-control bg-dark-subtle border-dark" placeholder="Search a city">
    <button type="button" class="btn btn-danger ms-2" onclick="climate()"><i class="fa-solid fa-magnifying-glass"></i></button>
</div>
<p class="location"><i class="fa-sharp fa-solid fa-location-dot"></i> ${placeName}</p>
<p class="temp">${temperature} &#8451</p>
<p class="mist">${condition}</p>
<div class="a1">
<p class="degree"><i class="fa-sharp fa-solid fa-droplet"></i> ${humidity}%</p>
<p class="wind"><i class="fa-solid fa-wind "></i> ${speed}km/h</p>
</div>
<p class="time">${time}</p>`





}