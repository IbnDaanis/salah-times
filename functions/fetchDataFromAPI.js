exports.handler = async function () {
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
