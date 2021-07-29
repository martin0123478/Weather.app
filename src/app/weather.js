export class Weather {
  constructor(city,countryCode){
    this.apikey = 'a26d6f487555a63b6b2418bfb5bdd390'
    this.city = city;
    this.countryCode = countryCode;
  }
  async getWeather(){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`
    const response = await fetch(url);
   const data= await response.json();
    return data ;
  }
  changeLocation(city,code){
    this.city = city;
    this.countryCode = code
  }
} 