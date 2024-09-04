async function getWeather(city) {
    try {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=BLRN2JY3EXDJYM73SE4D46444&contentType=json`)

    const data = await response.json();
    console.log(data)

    temp.innerText =`Tempurature :  ${data.currentConditions.temp}`
    condition.innerText = `Condition : ${data.currentConditions.conditions}`

    displayIcon()

    } catch {
        temp.innerText = 'City not found'
    }
}

function displayIcon() {
    
    if(condition.innerText.includes('cloud') || condition.innerText.includes('Cloud') || condition.innerText.includes('Overcast')) {
        image.src = img[0]
    }
    else if(condition.innerText.includes('rain') || condition.innerText.includes('Rain')) {
        image.src = img[3]
    }
    else if(condition.innerText == 'Condition : Clear') {
        image.src = img[2]
    }
}

getWeather('new york')

const input = document.getElementById('input')
const search = document.getElementById('search')
const temp = document.getElementById('temp')
const condition = document.getElementById('condition')
const image = document.getElementById('image')

search.addEventListener('click', ()=> {
    getWeather(input.value)
})

input.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        getWeather(input.value)
    }
})

const img = [
    'img/cloud.png',
    'img/snowing.png',
    'img/sun.png',
    'img/rain.png'
]
