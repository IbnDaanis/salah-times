const fetchDataFromAPI = async () => {
  const prayerTimes = []
  const API_KEY = process.env.API_KEY
  try {
    const fetchData = await fetch(
      `https://www.londonprayertimes.com/api/times/?format=json&key=${API_KEY}&24hours=true`
    )
    const dataJSON = await fetchData.json()
    const salahNames = ['fajr', 'sunrise', 'dhuhr', 'asr', 'magrib', 'isha']
    salahNames.forEach(salahName => {
      prayerTimes.push(dataJSON[salahName])
    })
    return prayerTimes
  } catch (error) {
    console.error(error)
  }
}

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

fetchDataFromAPI().then(data => displayDataInDOM(data))

import { fetchDataFromAPI2 } from '../functions/fetchDataFromAPI'

console.log(fetchDataFromAPI2())
