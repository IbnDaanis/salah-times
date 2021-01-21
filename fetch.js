// const API_ENDPOINT = `https://www.londonprayertimes.com/api/times/?format=json&key=${process.env.SALAH_API_KEY}&24hours=true`

// fetch(API_ENDPOINT)
//   .then(response => response.json())
//   .then(data => {
//     const prayerTimes = []
//     const salahNames = ['fajr', 'sunrise', 'dhuhr', 'asr', 'magrib', 'isha']
//     salahNames.forEach(salahName => {
//       prayerTimes.push(data[salahName])
//     })
//     displayDataInDOM(prayerTimes)
//   })
