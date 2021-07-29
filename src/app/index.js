require('./index.css')
const {UI } = require('./UI')
const ui = new UI();
const {Weather} = require('./weather')
const waether = new Weather('London', 'uk')

async function fetchWeather(){
 const data =await waether.getWeather();
 console.log(data)
 ui.render(data)
}
document.addEventListener('DOMContentLoaded',fetchWeather )