import React,{useState} from 'react';
import './App.css'


function App() {
  const[city,setCity]=useState("");
  const [result,setResult]=useState("");
  const changeHandeler=e =>{
    setCity(e.target.value);
  }
  const submitHandler=e =>{
    e.preventDefault();
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
    response => response.json()
  ).then(data => {
    const kelvin=data.main.temp;
    const celsius=kelvin-273.15;
    setResult("Temparature at" +"\n"+Math.round(celsius)+"°C");
    setCity("");

  })
  }
  return (
    <div class="hello">
      <center>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Wether Application</h4>
          <form onSubmit={submitHandler}>
            <input type="text" name="city" placeholder="Enter place name" onChange={changeHandeler}/>
            <br></br><br></br><br></br>
            <input type="submit"  value="Get temparature"/>
          </form>
          <h1>{result}</h1>
        </div>
      </div>
      </center>
    </div>
  );
}

export default App;
