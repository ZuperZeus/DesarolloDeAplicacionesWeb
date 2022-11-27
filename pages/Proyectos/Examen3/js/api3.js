function getNewJoke()
{
  const request = new XMLHttpRequest()
 
request.open('GET', 'https://official-joke-api.appspot.com/random_joke')
request.send()
 
request.onload = () => {
  if (request.status === 200) {
    var joke = JSON.parse(request.response).setup
    var pncl = JSON.parse(request.response).punchline
    document.getElementById("setup").textContent = joke
    document.getElementById("punchline").textContent = pncl
  } 
}
request.onerror = () => {
  console.log("error")
} 
}
getNewJoke()