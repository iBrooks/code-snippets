getFetch() {

  fetch('/data.json')
  .then(response => {
    if (!response.ok) {
      throw Error(response.statusText)
    }
  return response
  })
  .then(response =>{
    let data = response.json()
    return data
  })
  .then(data =>{
    doSomething = data...// Do a thing with the data and return it
    return doSomething
  })
  .catch(error => {
    console.log(error)
  })
}