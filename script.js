async function getWeather(city) {
    try {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=BLRN2JY3EXDJYM73SE4D46444&contentType=json`)

    const data = await response.json();
    console.log(data)

    temp.innerText =`Tempurature :  ${data.currentConditions.temp}`
    condition.innerText = `Condition : ${data.currentConditions.conditions}`
    
    } catch {
        temp.innerText = 'City not found'
    }
}

getWeather('new york')

const input = document.getElementById('input')
const search = document.getElementById('search')
const temp = document.getElementById('temp')
const condition = document.getElementById('condition')

search.addEventListener('click', ()=> {
    getWeather(input.value)
})

input.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        getWeather(input.value)
    }
})