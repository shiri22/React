import React, { useState } from "react";
import Data from "./Data.json";

const SearchFilter = () => {
  const [search, setSearch] = useState("");

  const handler = (e) => {setSearch(e.target.value)};
  return (
    <div>
      <center>
        <label>Enter Your City</label>
        <br />
        <input type="text" onChange={handler} />
        <br />
       {
        Data.filter(item=>item.city.toLocaleUpperCase().includes(search.toLocaleUpperCase())).map(item=>{
            return (
                <div key={item.id} style={{border:"1px solid black",padding:"8px",margin:"20px",width:"350px"}}>
                    {item.city}
                </div>
            )
        })
       }
      </center>
    </div>
  );
};

export default SearchFilter;
