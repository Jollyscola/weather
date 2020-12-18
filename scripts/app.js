const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const time = document.querySelector('.time')

const updateUI = function(data){

    //const cityInfo = data.cityInfo
   // const weather = data.weather
    //Destructuring object
    const {cityInfo,weather} = data;
   let daytime = weather.EpochTime;
  let {date,mounth,year} =  updateDate(daytime);

    details.innerHTML = `
    <h5 class="my-3">${cityInfo.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    <div class="display-7 my-4">
        <span>${date}-${mounth}-${year} </span>
     </div>

    `
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }
  
    //console.log(start)
    // let timeSrc = null

    let timeSrc = weather.IsDayTime ? 'img/day.jpg' : 'img/night.jpg'
    time.setAttribute('src',timeSrc)
    // if(weather.IsDayTime){
    //     timeSrc = 'img/day.jpg'
    // } else{
    //     timeSrc = 'img/night.jpg'
    // }
   
}
const updateCity = async (city) => {
    const cityInfo = await getCity(city)
    const weather = await getWeather(cityInfo.Key);

    return {cityInfo,weather}


}

const updateDate = (daytime) =>{
    let now = new Date(daytime * 1000)
    const date = now.getDate()
    const mounth =  now.getMonth() + 1
     const year = now.getFullYear()
     return {date,mounth,year}
}

cityForm.addEventListener('submit', e =>{
    //prevent default options
    e.preventDefault()
    //get city value
    const cityInfo = cityForm.city.value.trim();
    cityForm.reset()

    //update the ui den ny city
    updateCity(cityInfo)
    .then(data => updateUI(data))
    .catch(err => console.log(err))

})