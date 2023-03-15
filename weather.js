import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

const App = () =>
{
  // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=77850174f0521a8f573e850e5d0d1768`).then()
  // response => response.json()
  //  ).then
  const[city,setcity]=useState(" ")
  const[result,setresult]=useState(" ")
  const[humidity,sethumidity]=useState(" ")
  const[wind,setwind]=useState(" ")
  // const[wind,setwind]=useState(" ")
   const changeHandler = e => {
    setcity(e.target.value);
  }
  const submitHandler = e => {
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=77850174f0521a8f573e850e5d0d1768`).then(
     response => response.json()
     ).then(data =>{
      const kelvin=data.main.temp
      const Humidity=data.main.humidity
      const wind=data.main.wind_speed
      const celcius=kelvin-273.15
      setresult("Temperature at "+city+" " +Math.round(celcius)+"degree Celcius")
      sethumidity("Humidity at"+" "+city+"is"+" "+Humidity)
      setwind("windspeeed at"+" "+city+" "+"is"+wind)
      setcity(" ")
     })
    // )e.preventDefault();
    // console.log(city)
  }
  return (
    <div>
    <div className="Card">
       <center>
        <div className="Card-body">
            <h4 className="card-title">whetther_app</h4>
            <form onSubmit={submitHandler}>
                <input type="text" name="city" value={city} onChange={changeHandler}/><br/><br/>
                <input type="submit"value="get temp"/>
            </form>
            <h1>{result}</h1>
            <h1>{humidity}</h1>
           <h1>{wind}</h1> 
        </div>
      </center>
    </div>
    </div>
  )
}
export default App;
