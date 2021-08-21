fetch('/static-api.json', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'blogposts'
  })
}).then(res =>{
  return res.json()
})
.then(data => console.log(data))
.catch(error => console.log('ERROR'))