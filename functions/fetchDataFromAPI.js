const fetch = require('node-fetch')
require('dotenv').config()

const API_ENDPOINT = `https://www.londonprayertimes.com/api/times/?format=json&key=${process.env.SALAH_API_KEY}&24hours=true`

exports.handler = async function (event, context) {
  let response
  try {
    response = await fetch(API_ENDPOINT)
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message,
      }),
    }
  }

  const prayerTimes = []
  const dataJSON = await response.json()
  const salahNames = ['fajr', 'sunrise', 'dhuhr', 'asr', 'magrib', 'isha']
  salahNames.forEach(salahName => {
    prayerTimes.push(dataJSON[salahName])
  })
  return {
    statusCode: 200,
    body: JSON.stringify({ message: prayerTimes }),
  }
}
