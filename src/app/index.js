require('./index.css')
const {Store} =require ('./store')
const store = new Store()
const {city,countryCode} = store.getLocationData()
const {UI } = require('./UI')
const ui = new UI();
const {Weather} = require('./weather')
const waether = new Weather(city, countryCode)

async function fetchWeather(){
 const data =await waether.getWeather();
 console.log(data)
 ui.render(data)
}
document.getElementById('w-change-btn').addEventListener('click',(e) =>{
 const city= document.getElementById('city').value;
  const countryCode = document.getElementById('countryCode').value;
  waether.changeLocation(city,countryCode);
  fetchWeather();
  e.preventDefault()
})
document.addEventListener('DOMContentLoaded',fetchWeather )