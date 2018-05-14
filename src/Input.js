import React,{Component} from 'react'

const lands = [
  {
    "country": "AD",
    "name": "Sant Julià de Lòria",
    "lat": "42.46372",
    "lng": "1.49129"
  },
  {
    "country": "AD",
    "name": "Pas de la Casa",
    "lat": "42.54277",
    "lng": "1.73361"
  },
  {
    "country": "AD",
    "name": "Ordino",
    "lat": "42.55623",
    "lng": "1.53319"
  },
  {
    "country": "AD",
    "name": "les Escaldes",
    "lat": "42.50729",
    "lng": "1.53414"
  },
  {
    "country": "AD",
    "name": "la Massana",
    "lat": "42.54499",
    "lng": "1.51483"
  },
  {
    "country": "AD",
    "name": "Encamp",
    "lat": "42.53474",
    "lng": "1.58014"
  },
  {
    "country": "AD",
    "name": "Canillo",
    "lat": "42.5676",
    "lng": "1.59756"
  },
  {
    "country": "AD",
    "name": "Arinsal",
    "lat": "42.57205",
    "lng": "1.48453"
  },
  {
    "country": "AD",
    "name": "Andorra la Vella",
    "lat": "42.50779",
    "lng": "1.52109"
  },
  {
    "country": "AE",
    "name": "Umm al Qaywayn",
    "lat": "25.56473",
    "lng": "55.55517"
  },
  {
    "country": "AE",
    "name": "Ras al-Khaimah",
    "lat": "25.78953",
    "lng": "55.9432"
  },
  {
    "country": "AE",
    "name": "Muzayri‘",
    "lat": "23.14355",
    "lng": "53.7881"
  },
  {
    "country": "AE",
    "name": "Khawr Fakkān",
    "lat": "25.33132",
    "lng": "56.34199"
  },
  {
    "country": "AE",
    "name": "Dubai",
    "lat": "25.0657",
    "lng": "55.17128"
  },
  {
    "country": "AE",
    "name": "Dibba Al-Fujairah",
    "lat": "25.59246",
    "lng": "56.26176"
  },
  {
    "country": "AE",
    "name": "Dibba Al-Hisn",
    "lat": "25.61955",
    "lng": "56.27291"
  },
  {
    "country": "AE",
    "name": "Sharjah",
    "lat": "25.33737",
    "lng": "55.41206"
  },
  {
    "country": "AE",
    "name": "Ar Ruways",
    "lat": "24.11028",
    "lng": "52.73056"
  },
  {
    "country": "AE",
    "name": "Al Fujayrah",
    "lat": "25.11641",
    "lng": "56.34141"
  },
  {
    "country": "AE",
    "name": "Al Ain",
    "lat": "24.19167",
    "lng": "55.76056"
  },
  {
    "country": "AE",
    "name": "Ajman",
    "lat": "25.41111",
    "lng": "55.43504"
  },
  {
    "country": "AE",
    "name": "Adh Dhayd",
    "lat": "25.28812",
    "lng": "55.88157"
  },
  {
    "country": "AE",
    "name": "Abu Dhabi",
    "lat": "24.46667",
    "lng": "54.36667"
  },
  {
    "country": "AF",
    "name": "Zorkot",
    "lat": "33.54149",
    "lng": "69.73446"
  },
  {
    "country": "AF",
    "name": "Wulêswālī Bihsūd",
    "lat": "34.3436",
    "lng": "67.90567"
  },
  {
    "country": "AF",
    "name": "Kuhsān",
    "lat": "34.65389",
    "lng": "61.19778"
  },
  {
    "country": "AF",
    "name": "Lāsh",
    "lat": "35.3782",
    "lng": "64.77457"
  },
  {
    "country": "AF",
    "name": "Tukzār",
    "lat": "35.94831",
    "lng": "66.42132"
  },
  {
    "country": "AF",
    "name": "Mīray",
    "lat": "33.32462",
    "lng": "68.44068"
  },
  {
    "country": "AF",
    "name": "Āq Kupruk",
    "lat": "36.08352",
    "lng": "66.84029"
  }
]
class Input extends Component{
  
constructor(props){
  super(props)
  this.state={
    textValue:'',
    lands:lands
  }
  this.handleSubmit=this.handleSubmit.bind(this)
}


handleSubmit(e){
  e.preventDefault()
  const textValue = e.target.elements.input.value
  this.setState({textValue:textValue})

  for (let i = 0; i < lands.length; i++) {
    if (lands[i].name === textValue) {
      const qq = lands[i].country
      this.setState({code:qq})
    }
 } 

}

render(){
  return(
    <div>
      <form onSubmit={this.handleSubmit}>
      <input type = "text" name='input' /> 
      <button type= "Submit">Filter</button>
      <p>{this.state.textValue}</p>
      <p>{this.state.code}</p>
      </form>
    </div>
  )
}
} 


export default Input


