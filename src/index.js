const displayDataInDOM = async data => {
  const salahTimesList = document.querySelector('.salah-times-list')
  const dateEl = document.querySelector('.date')
  const [day, month, year] = new Date().toLocaleDateString('en-GB').split('/')
  dateEl.textContent = `${day}/${month}/${year}`
  data.forEach(salahName => {
    const li = document.createElement('li')
    li.textContent = salahName
    salahTimesList.appendChild(li)
  })
  document.querySelector('.container').style.opacity = '1'
}

// fetch('/.netlify/functions/fetchDataFromAPI')
//   .then(response => response.json())
//   .then(data => displayDataInDOM(data.message))

const API_ENDPOINT = `https://www.londonprayertimes.com/api/times/?format=json&key=${process.env.SALAH_API_KEY}&24hours=true`

fetch(API_ENDPOINT)
  .then(response => response.json())
  .then(data => {
    const prayerTimes = []
    const salahNames = ['fajr', 'sunrise', 'dhuhr', 'asr', 'magrib', 'isha']
    salahNames.forEach(salahName => {
      prayerTimes.push(data[salahName])
    })
    displayDataInDOM(prayerTimes)
  })
