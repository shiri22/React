import React, { useState } from "react";

const Weather = () => {
    const [search,setSearch] = useState('');
    const[data,setData] = useState();

    const handler = e => setSearch(e.target.value);
    const submitHandler = e => {
        e.preventDefault();
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=d885aa1d783fd13a55050afeef620fcb`
        ).then(res=>res.json())
        .then(res=> {
            const result = res.main.temp;
            const kelvin = result-273.15
            setData("Temperature at" +" " +search+ "\n " + Math.round(kelvin)+ "°C")})
            setSearch("")
    }
  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title"> Weather App</h1>
            <br />
            <form onSubmit={submitHandler}>
              <input type="text" value={search} onChange={handler} />
              <br />
              <input type="submit" value="Click Here" />
            </form>
           <h1> {data}</h1>
          </div>
        </div>
        
      </center>
    </div>
  );
}

export default Weather