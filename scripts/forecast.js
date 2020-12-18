const key = "WNXdxmwjlyEC3JqjenWrq6aHdEFfCI2C"



const getWeather = async (id) =>{
    const base = "http://dataservice.accuweather.com/currentconditions/v1/"
    const queue = `${id}?apikey=${key}`

    const response = await fetch (base + queue);
    const data = await response.json();

  return data[0]
}

const getCity = async (city) => {
    const base ='http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`


    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
}





// getCity('copenhagen')
// .then(data =>  getWeather(data.Key))
// .then(data =>console.log(data))
// .catch(err => console.log(err))