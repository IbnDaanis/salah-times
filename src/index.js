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

fetch('/.netlify/functions/fetchDataFromAPI')
  .then(response => response.json().message)
  .then(data => displayDataInDOM(data))
