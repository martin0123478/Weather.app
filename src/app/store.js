export class Store{
  constructor(){
    this.city;
    this.countryCode;
    this.defaulCity = 'London';
    this.defaulCountry = 'uk'
  }
  getLocationData(){
    if(localStorage.getItem('city')===null){
      this.city = this.defaulCity;
    }
    else{
      this.city = localStorage.getItem('city')
    }
    if(localStorage.getItem('countryCode')===null){
      this.countryCode = this.defaulCountry;
    }
    else{
      this.countryCode = localStorage.getItem('countryCode')
    }

    return{
      city : this.city,
      countryCode: this.countryCode
    }
    
    
  }
  setLocationdata(city,countryCode){
    localStorage.setItem('city',city);
    localStorage.setItem('countryCode',countryCode)
  }
}