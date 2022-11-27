const fetchNASAData = async () => {
    try {
      const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=LfJlbO1T2HViM4wMaCZTN6WINbz1yHkAaTcu8xdJ")
      const data = await response.json()
      console.log('NASA APOD', data)
      document.getElementById('apod-picture').src = data.hdurl
      document.getElementById('apod-title').textContent = data.title
      displayData(data)
    } catch (error) {
      console.log(error)
    }
  }
  
  fetchNASAData()